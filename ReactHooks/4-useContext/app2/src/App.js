import React, { useState } from 'react'
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { StudyContext } from './context/StudyContext';

function App() {
  const [isDark, setIsDark] = useState(false)
  
  return (
    // ThemeContext.Provider가 감싸는 모든 하위컴포넌트는 props를 사용하지 않고도 value안의 isDark와 setIsDark에 접근할수 있게 된다.
    <StudyContext.Provider value={"컨텍스트"}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page />
      </ThemeContext.Provider>
    </StudyContext.Provider>
  )
}

export default App;
