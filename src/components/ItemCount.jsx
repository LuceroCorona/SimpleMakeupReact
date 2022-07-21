import React, {useState} from 'react';

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);

    function handleAdd() {
      if (count<props.stock) {
        setCount(count+1);
      }
    }

    function handleSubstract() {
      if (count>1)
      setCount(count-1);
    }

    return (
      <section> 
        <div>
          <button onClick={handleSubstract}> - </button>
          <span> {count} </span>
          <button onClick={handleAdd}> + </button>
          <div>
            <button> Agregar al carrito </button>
          </div>
        </div>
      </section>  
  );
}

export default ItemCount