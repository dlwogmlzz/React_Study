import React, { useState, useRef } from 'react'

export default function App() {
  // 화면을 렌더링 시켜줄 변수를 만든다.
  const [renderer, setRenderer] = useState(0)

  // 컴포넌트 내부의 변수와 Ref의 차이
  const countRef = useRef(0)
  // 렌더링이 되면 전체 변수와 함수들이 초기화 되기때문에 일반변수를 아무리 counting 시켜도 결과는 0이 된다.
  let countVar = 0
  
  const doRendering = () => {
    setRenderer(renderer + 1)
  }

  const increaseRef = () => {
    countRef.current = countRef.current + 1
    console.log('ref: ', countRef.current)
  }

  const increaseVar = () => {
    countVar = countVar + 1
    console.log('var: ', countVar)
  }

  const printResults = () => {
    // Ref와 일반변수의 결과 값을 확인해보자
    console.log(`ref: ${countRef.current}, var: ${countVar}`)
  }

  return (
    <div>
      <p>Ref: { countRef.current }</p>
      <p>Var: { countVar }</p>
      {/* 렌더링을 위한 버튼 */}
      <button onClick={doRendering}>Rendering</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var값 출력</button>
    </div>
  )
}
