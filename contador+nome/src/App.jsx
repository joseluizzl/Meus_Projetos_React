import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [nome, setNome] = useState("Gabriel")

  function cliqueDoBotao() {
    setContador(contador + 1)
    setNome("Miguel")
  }

  return (
    <>
      <p>{contador}</p>
      <p>{nome}</p>
      <button onClick={cliqueDoBotao}>Incremento</button>
    </>
  )
}

export default App
