import React, { useState, useEffect } from 'react'
import Timer from './components/Timer'

export default function App() {

  const [ showTimer, setShowTimer ] = useState(false) 

  return (
    <div>
      {/* AND연산자(&&) : 조건부 렌더링으로 showTimer가 True일때만 Timer를 실행시키겠다. */}
      { showTimer && <Timer /> }
      {/* onClick기능으로 버튼을 누르면 열고닫는 토글기능이 작동 */}
      <button onClick={ () => setShowTimer(!showTimer) }>Toggle Timer</button>
    </div>
  )
}
