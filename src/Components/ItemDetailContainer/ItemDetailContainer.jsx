import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null); // Corrected to 'item'
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
      const queryDoc = doc(queryDB, 'products', id)
      getDoc(queryDoc).then((res)=>
      setItems({id: res.id, ...res.data()}))
      
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        <ItemDetail item={item} /> {/* Changed to 'item' */}
      </div>
    </div>
  );
};

export default ItemDetailContainer;

