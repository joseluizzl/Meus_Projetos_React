import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        alert('Dados enviados')
    }
    
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Acesse o sistema</h2>
                    <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    <p/>
                    <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                    <p/>
                    <label>
                        <input type="checkbox"/>
                        Lembre de mim
                    </label>
                    <p/>
                    <a href="#">Esqueceu a senha?</a>
                    <p/>
                    <button>Entrar</button>
                    <p/>
                    <p>Não tem conta? <a href="#">Registrar</a></p>
                </form>
            </div>
        </>
    )
}

export default Login
