import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // location을 함수형으로
  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국'
    }
  }, [isKorea]);

  // {
  //   country: isKorea ? '한국' : '외국'
  // };

  useEffect(() => {
    // 뭔가 오래걸리는 작업을 한다면 꼭 필요할때만 호출되는 것이 좋다.
    console.log('비행기 내림');
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default App;
