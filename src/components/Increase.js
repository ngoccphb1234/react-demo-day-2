import React, {useState} from 'react';


const orders = [200, 400, 400];

function Increase() {

      const [counter, setCounter] = useState(orders.reduce((total, currentValue) => {
          return total + currentValue;
      }));

    function handlerIncrease(){
        return setCounter(prev => prev + 2);
    }

      return (
          <div><h1>---------------STATE ZONE-------------------</h1>
            <h1>{counter}</h1>
              <button onClick={handlerIncrease}>+ 2</button>
              <br/>

          </div>
      );
}

export default Increase;