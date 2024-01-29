import React, { useState, useEffect, useCallback  } from 'react';


function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  // 일반 함수일 경우의 useEffect안의 콘솔변화
  // const someFunction = () => {
  //   console.log(`현재 저장한 값: number: ${number}`);
  //   return;
  // }
  
  // useCallback으로 함수를 메모이제이션, 렌더링 되기전까지 전에 저장된 값이 계속 남아있다.
  // 그래서 number가 업데이트 되면 메모이제이션된 함수도 업데이트를 시켜주기 위해, 밑에 의존성[]에 number를 넣어준다.
  // 그러면 렌더링 될때마다 콘솔이 찍히게 된다.
  const someFunction = useCallback(() => {
    console.log(`현재 저장한 값: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;
