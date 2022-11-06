import React, {useState} from 'react';


const orders = [200, 400, 400];
const total = orders.reduce((total, currentValue) => {
    return total + currentValue;
})

function Increase() {
      const [counter, setCounter] = useState(total);

    function handlerIncrease(){
        return setCounter(prev => prev + 1);
    }
    function handlerDecrease(){
        return setCounter(prev => prev - 1);
    }
    function handlerReset(){
        return setCounter(total);
    }


      return (
          <div>
             <span style={{display: 'inline-flex'}}>
                  <button onClick={handlerDecrease}>-1</button>
              <h1 style={{margin: '0 20px'}}>{counter}</h1>
              <button onClick={handlerIncrease}>+1</button>
             </span>
              <br/>
              <button onClick={handlerReset}>Reset</button>
              <br/>
          </div>
      );
}

export default Increase;