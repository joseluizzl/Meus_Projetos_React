const Contato = ({nome, telefone, temWhatsapp, observacoes, index, handleEditarContato, handleExcluirContato}) => {
const style = {
  borderWidth: '2px',
  border: 'solid',
  borderRadius: '18px',
  marginBottom: '18px',
  padding: '10px',
  backgroundColor: 'yellow'
} 
  
  return (
        <>
            <div style={style}>
            <h3>{nome}</h3>
            <p>{telefone}</p>
            <p>{temWhatsapp ? <a href={`https://wa.me/${telefone}`}>Conversar</a>
            : 'Não' }</p>
            <p>{observacoes == '' ? '-' : observacoes}</p>
            <button onClick={() => {
              handleEditarContato({nome, telefone, temWhatsapp, observacoes}, index)
            }}>Editar</button>
            <button onClick={() => {
              handleExcluirContato(index)
            }}>Excluir</button>
          </div>
        </>
    )
}

export default Contato