import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

const CheckOut = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');
  const [mensaje, setMensaje] = useState('');

  const { cart, totalPrice, removeProduct } = useCartContext();

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor complete todos los campos requeridos');
      return;
    }

    if (email !== emailConfirmacion) {
      setError('Los email no coinciden');
      return;
    }

    const total = totalPrice();
    const orden = {
      items: cart.map((item) => ({
        id: item.id,
        nombre: item.title,
        cantidad: item.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (itemOrden) => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', itemOrden.id);

        const itemDoc = await getDoc(itemRef);
        const stockActual = itemDoc.data().stock;

        await updateDoc(itemRef, {
          stock: stockActual - itemOrden.cantidad,
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, 'orders'), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            removeProduct(); // Aquí se elimina el producto del carrito después de la compra
          })
          .catch((error) => {
            console.log('No se pudo crear la orden', error);
            setError('Error en la orden');
          });
      })
      .catch((error) => {
        console.log('No se puede actualizar el stock', error);
        setError('No se actualizo el stock');
      });

    setNombre('');
    setApellido('');
    setTelefono('');
    setEmail('');
    setEmailConfirmacion('');
    setMensaje('');
  };

  return (
    <div>
      <h2> Complete el formulario para confirmar la compra </h2>
      <form onSubmit={manejadorFormulario}>
        {/* Renderizar los elementos del carrito */}
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.title} {item.quantity}</p>
            <p>{item.price}</p>
          </div>
        ))}

        {/* Resto del formulario... */}

        {error && <p>{error}</p>}
        {ordenId && (
          <p>
            ¡Gracias por tu compra! Tu número de seguimiento es: <br /> {ordenId} <br />
          </p>
        )}
        <div>
          <button type="submit"> Enviar </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
