import React, {useState} from 'react';

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function handleAdd() {
      if (count<stock) {
        setCount(count+1);
      }
    }

    function handleSubstract() {
      if (count>1)
      setCount(count-1);
    }

    function handleFinish () {
      prompt=('Todos los productos fueron agregados a tu carrito');
    }

    return (
        <section> 
        <div>
          <button onClick={handleSubstract()}> - </button>
          <span> {count} </span>
          <button onClick={handleAdd()}> + </button>
          <div>
            <button onClick={handleFinish}> Agregar al carrito </button>
          </div>
        </div>

      </section>  
    )
}

export default ItemCount