import { Link, useHistory } from "react-router-dom/cjs/react-router-dom"

const Home = () => {
    const history = useHistory()

    return (
        <>
            <h1>Bem vindo a minha página!</h1>
            <button onClick={() => {
                history.push('/cadastro')
            }}>Cadastros</button>
            <Link to='/contato'>Contato</Link>
        </>
    )
}

export default Home