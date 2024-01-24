import React, { useRef, useEffect } from 'react'

// 로그인 input창 자동 focus시키기
export default function App() {
  const inputRef = useRef()

  useEffect(() => {
    // console.log(inputRef)
    // 자동 focus
    inputRef.current.focus()
  }, []) // DEPS에 []빈배열, 먼처음 렌더링 됐을때만 실행 

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}님 !`)
    // alert창 띄우고 난 뒤에도 다시 input창 포커스
    inputRef.current.focus()
  }

  return ( 
    <div>
      {/* current안에 input에 대한 참조를 넣어준다. */}
      <input ref={inputRef} type="text" placeholder='username' />
      <button onClick={login}>로그인</button>
    </div>
  )
}
