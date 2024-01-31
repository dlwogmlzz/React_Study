import React, { useState, useReducer } from 'react';


// Action - Dispatch안에 들어갈 요구의 내용
const ACTION_TYPE = {
  deposit: 'deposit',
  withdraw: 'withdraw',
}

// Reducer - state를 업데이트 해주는 역할(은행)
const reducer = (state, action) => {
  console.log("reducer은행이 일을 합니다.", state, action);

  switch (action.type) {
    case ACTION_TYPE.deposit:
      return state + action.payload;
    case ACTION_TYPE.withdraw:
      return state - action.payload;
    default:
      return state;
  }

};
// Dispatch - state 업데이트를 위한 요구


function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input 
      type="number" 
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))}
      step="1000"
      />
      <button onClick={() => {
        dispatch({ type: ACTION_TYPE.deposit, payload: number });
      }}>예금
      </button>
      <button onClick={() => {
        dispatch({ type: ACTION_TYPE.withdraw, payload: number });
      }}>출금
      </button>
    </div>
  );
}

export default App;
