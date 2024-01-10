import React from 'react';
import { useCartContext } from '../Context/CartContext';
import './ItemCart.css';

const ItemCart = ({ item }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      {item.img && <img src={item.img} className="img-fluid" alt={item.img} />}
      <div>
        <p>Título: {item.title}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio u.: $ {item.price}</p>
        <p>Subtotal: ${item.quantity * item.price}</p>
        <button onClick={() => removeProduct(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
