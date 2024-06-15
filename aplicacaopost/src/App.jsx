import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post/Post'

function App() {

  const [posts, setPosts] = useState([])
  const [autor, setAutor] = useState('')
  const [comentario, setComentario] = useState('')
  const inputAutor = useRef(null)

  useEffect(() => {
    if(posts.length == 0)
    alert('Seja Bem Vindo!')
  }, []) // -> Array de dependências vazio, executa apenas na criação do componente.

  useEffect(() => {
    if(posts.length == 0)
    alert('Os posts foram atualizados')
  }, [posts]) // -> Executa a função quando o post for alterado.

  const handleSubmit = (e) => {
    e.preventDefault()
    setPosts([...posts, {autor, comentario, likes : 0}])
    alert('Novo post')
    setAutor('')
    setComentario('')
    inputAutor.current.focus()
  }

  const handleAutorChange = (e) => {
    setAutor(e.target.value)
  }

  const handleComentarioChange = (e) => {
    setComentario(e.target.value)
  }

  const handleExcluirClick = (index) => {
    setPosts(posts.filter((post, i) => i != index))
    alert('Post excluído')
  }

  const handleLike = (index) => {
    setPosts(posts.map((post, i) => {
      if (i == index) {
        return {
          autor: post.autor,
          comentario: post.comentario,
          likes: post.likes + 1
        }
      }
      else
        return post
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='autor'>Autor:</label>
        <p/>
        <input ref={inputAutor} id='autor' value={autor} onChange={handleAutorChange}/>
        <p/>
        <label htmlFor='comentario'>Comentário:</label>
        <p/>
        <textarea id='comentario' value={comentario} onChange={handleComentarioChange}></textarea>
        <p/>
        <button type='submit'>Publicar</button>
        </form>
        <p/>
        <hr />
        <p/>
        <div>
          {posts.map((post, index) => 
          <Post 
          key={index} 
          autor={post.autor} 
          comentario={post.comentario}
          likes={post.likes}
          index={index}
          darLike={() => {handleLike(index)}}
          handleExcluirClick={handleExcluirClick}
          />
          )}
        </div>
      
    </>
  )
}

export default App
