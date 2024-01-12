import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useCartContext } from '../Context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { totalItems } = useCartContext();

  return (
    <div className="container">
      <button>
        <BsFillCartCheckFill />
        {totalItems() !== null && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems()}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartWidget;

