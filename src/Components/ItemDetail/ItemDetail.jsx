import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'; // Asegúrate de importar el componente ItemCount correctamente

const ItemDetail = ({ item }) => {
  if (!item) {
    return <div>Cargando...</div>;
  }

  const { imagen, nombre, descripcion, precio, stock } = item;

  const handleAddToCart = (quantity) => {
    // Aquí puedes realizar la lógica para agregar al carrito, si es necesario
    console.log(`Agregado al carrito: ${quantity} ${nombre}`);
  };

  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        {imagen && <img src={imagen} className='img-fluid' alt={nombre} />}
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>$ {precio}</p>
        <p>cantidad: {stock}</p>
        <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
