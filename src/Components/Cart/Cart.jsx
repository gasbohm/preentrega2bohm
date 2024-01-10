import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import CheckOut from '../Checkout/CheckOut';  // Importa el componente CheckOut

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((item) => (
        <ItemCart key={item.id} item={item} />
      ))}
      <p>Total: $ {totalPrice()}</p>
      <Link to="/checkout">
        <button className="btn-total">Finalizar Compra</button>
      </Link>
      {/* Agrega el componente CheckOut aquí */}
      <CheckOut />
    </>
  );
};

export default Cart;

