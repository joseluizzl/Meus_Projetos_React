import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [novaTarefa, setNovaTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  const handleNovaTarefaChange = (event) => {
    setNovaTarefa(event.target.value)
  }

  const handleAdicionarClick = () => {
    if(novaTarefa != '') {
      setTarefas([...tarefas, novaTarefa])
      setNovaTarefa('')
    }
    
  }

  const handleDeletarClick = (i) => {
    setTarefas(tarefas.filter((tarefa, index) => index != i))
  }

  const handleZerarClick = () => {
    setTarefas([])
  }

  return (
    <>
     <div>
      <h1>To do list</h1>
      <input value={novaTarefa} onChange={handleNovaTarefaChange}/>
      <button onClick={handleAdicionarClick}>Adicionar</button>
      <button onClick={handleZerarClick}>Zerar</button>
      <hr />
      {tarefas.map((tarefa, index) => (
        <div>
        {tarefa}
        <button onClick={() => {
          handleDeletarClick(index)
        }}>x</button>
       </div>
      ))}
     </div>
     
    </>
  )
}

export default App
