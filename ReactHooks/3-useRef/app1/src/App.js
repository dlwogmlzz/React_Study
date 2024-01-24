import React, { useState, useRef } from 'react'

export default function App() {
  const [ count, setCount ] = useState(0)
  // Ref는 하나의 오브젝트이다.
  const countRef = useRef(1)

  console.log('렌더링...')

  const increaseCountState = () => {
    setCount(count + 1)
  }

   // Ref안에 있는 값에 접근하기 위해서는 countRef.current로 접근
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1
    console.log('Ref: ', countRef.current)
  }

  return (
    <div>
      <p>State: { count }</p>
      <p>Ref: { countRef.current }</p>
      <button onClick={ increaseCountState }>State올려</button>
      <button onClick={ increaseCountRef }>Ref올려</button>
    </div>
  )
}
