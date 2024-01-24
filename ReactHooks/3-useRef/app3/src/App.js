import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  const [count, setCount] = useState(1)
  // const [renderCount, setRenderCount] = useState(1)
  const renderCount = useRef(1)

  // 이렇게 하면 무한반복이 된다!!!
  // useEffect(() => {
  //   console.log('렌더링!!')
  //   setRenderCount(renderCount + 1)
  // })

  useEffect(() => {
    // 렌더는 리렌더링을 발생시키지 않으니까 무한루프에 빠지지 않는다. 
    renderCount.current = renderCount.current + 1
    console.log('렌더링 수: ', renderCount.current)
  })

  return (
    <div>
      <p>Count: { count }</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  )
}
