import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contato from './components/Contato/Contato'

function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [temWhatsapp, setTemWhatsapp] = useState(false)
  const [observacoes, setObservacoes] = useState('teste')
  const [listaDeContatos, setListaDeContatos] = useState([
    // {
    // nome: 'José',
    // telefone: 21987654312,
    // temWhatsapp: true,
    // observacoes: ''
    // },
    // {
    // nome: 'José',
    // telefone: 21987654312,
    // temWhatsapp: true,
    // observacoes: ''
    // }
])

  const handleSubimit = (e) => {
    e.preventDefault()
    setListaDeContatos([...listaDeContatos, {
      nome: nome,
      telefone: telefone,
      temWhatsapp: temWhatsapp,
      observacoes: observacoes
    }])
    handleZerar()
  }

  const handleExcluirContato = (index) => {
    setListaDeContatos(listaDeContatos.filter((contatos, i) => i != index))
  }

  function handleEditarContato({nome, telefone, temWhatsapp, observacoes}, index) {
    setNome(nome)
    setTelefone(telefone)
    setTemWhatsapp(temWhatsapp)
    setObservacoes(observacoes)
    handleExcluirContato(index)
  }

  const handleZerar = () => {
    setNome('')
    setTelefone('')
    setTemWhatsapp(false)
    setObservacoes('')
  }

  return (
    <>
      <form onSubmit={handleSubimit} onReset={(e) => {
        handleZerar()
      }}>
        <label htmlFor='nome'>Nome:</label>
        <input required id='nome' value={nome} onChange={(e) => {
          setNome(e.target.value)
        }} />
        <p/>
        <label htmlFor='telefone'>Telefone:</label>
        <input required id='telefone' value={telefone} onChange={(e) => {
          setTelefone(e.target.value)
        }}/>
        <p/>
        <label htmlFor='wpp'>Tem Whatsapp:</label>
        <input id='wpp' type='checkbox' checked={temWhatsapp} onChange={(e) => {
          setTemWhatsapp(e.target.checked)
        }} />
        <p/>
        <label htmlFor='obs'>Observações:</label>
        <textarea id='obs'value={observacoes} onChange={() => {
          setObservacoes(e.target.value)
        }} />

        <p/>
        <button type='submit'>Salvar</button>
        <button type='reset'>Limpar formulário</button>
      </form>

      <br />
      <hr />
      <br />
      <div>
        {listaDeContatos.map((contato, index) => 
        < Contato 
        key={index} 
        nome={contato.nome} 
        telefone={contato.telefone} 
        temWhatsapp={contato.temWhatsapp} 
        index={index} 
        observacoes={contato.observacoes}
        handleEditarContato={handleEditarContato}
        handleExcluirContato={handleExcluirContato}
        />
        )}
      </div>
    </>
  )
}

export default App
