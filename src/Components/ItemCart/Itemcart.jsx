import React from 'react';
import { useCartContext } from '../Context/CartContext';
import '../ItemCart/ItemCart.css'


const ItemCart = ({ items }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={items.imagen}className="img-flui" alt={items.nombre} />
            <div>
                <p>Título: {items.nombre}</p>
                <p>Cantidad: {items.quantity}</p>
                <p>Precio u.: $ {items.precio}</p>
                <p>Subtotal: ${items.quantity * items.precio}</p>
                <button onClick={() => removeProduct(items.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart