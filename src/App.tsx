import { useState } from 'react'
import {WelcomeSection} from "./Components/WelcomeSection/WelcomeSection.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WelcomeSection/>
    </>
  )
}

export default App
