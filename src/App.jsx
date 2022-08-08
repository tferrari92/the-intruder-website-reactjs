import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <Text /> */}
      {/* <Features /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
