import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const CheckOut = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const { cart, totalPrice, removeProduct } = useCartContext();

  const manejadorFormulario = async (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor complete todos los campos requeridos');
      return;
    }

    if (email !== emailConfirmacion) {
      setError('Los email no coinciden');
      return;
    }

    try {
      const db = getFirestore();

      await Promise.all(
        cart.map(async (producto) => {
          const productoRef = doc(db, 'products', producto.id);
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          await updateDoc(productoRef, {
            stock: stockActual - producto.quantity,
          });
        })
      );

      const orderCollectionRef = collection(db, 'orders');
      const total = totalPrice();

      const orden = {
        items: cart.map((producto) => ({
          id: producto.id,
          nombre: producto.title,
          cantidad: producto.quantity,
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
      };

      const newOrderRef = await addDoc(orderCollectionRef, orden);

      setOrdenId(newOrderRef.id);
      removeProduct();
      setNombre('');
      setApellido('');
      setTelefono('');
      setEmail('');
      setEmailConfirmacion('');
      setError('');
    } catch (error) {
      console.error('Error al procesar la compra:', error);
      setError('Hubo un error al procesar la compra');
    }
  };

  return (
    <div>
      <h2> Complete el formulario para confirmar la compra </h2>
      <form onSubmit={manejadorFormulario}>
        {cart.map((producto) => (
          <div key={producto.id}>
            <p>
              {producto.title} - Cantidad: {producto.quantity}
            </p>
            <p>Precio por unidad: ${producto.price}</p>
          </div>
        ))}

        <div>
          <label className="lab-check">Nombre:</label>
          <input className="input-check" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label className="lab-check">Apellido:</label>
          <input className="input-check" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div>
          <label className="lab-check">Telefono:</label>
          <input className="input-check" type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div>
          <label className="lab-check">Email:</label>
          <input className="input-check" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label className="lab-check">Confirmar email</label>
          <input className="input-check" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

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
