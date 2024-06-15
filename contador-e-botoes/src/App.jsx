import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [contador, setContador] = useState(0)
  const [novoValor, setNovoValor] = useState(0)


  const handleDecrementarClick = () => {
    setContador(contador - 1)
  }

  const handleIncrementarClick = () => {
    setContador(contador + 1)
  }

  function handleResetClick() {
    setContador(0)
  }

  function handleInputClick(e) {
    setNovoValor(Number(e.target.value))
  }

  function handleAlterarClick() {
    setContador(novoValor)
  }
  return (
    <>
     <p>{contador}</p>
     <button onClick={handleDecrementarClick}>Decrementar</button>
     <button onClick={handleIncrementarClick}>Incrementar</button>
     <button onClick={handleResetClick}>Resetar</button>
     <hr />
     <input type="number" onChange={handleInputClick}/>
     <button onClick={handleAlterarClick}>Alterar</button>
    </>
  )
}

export default App
