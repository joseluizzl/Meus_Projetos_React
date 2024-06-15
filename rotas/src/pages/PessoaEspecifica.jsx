import { useEffect } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { Redirect } from "react-router-dom/cjs/react-router-dom"

const PessoaEspecifica = () => {
    const {id} = useParams()
    const estaLogado = false

    useEffect(() => {
        alert('Fez o get')
    }, [id])


    return (
        <>
            {!estaLogado && <Redirect to={'/login'} />}
            <h1>Você é o: {id}</h1>
        </>
    )
}

export default PessoaEspecifica