import { useEffect } from "react"


const Post = ({autor, comentario, likes, index, darLike, handleExcluirClick}) => {
    
    return (
        <>
            <div>
                <p>Autor: {autor}</p>
                <p>Comentário: {comentario}</p>
                <button onClick={darLike}>Likes: {likes}</button>
                <button onClick={() => {
                    handleExcluirClick(index)
                }}>Excluir</button>
            </div>
        </>
    )
}

export default Post