// ItemList.jsx
import React from 'react';
import Item from '../Item/Item';
import '../item.css'; // Asegúrate de importar tu archivo de estilos

const ItemList = ({ items }) => {
  return (
    <div className='row'>
      {items.map(item => (
        <div className='col-md-4' key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
