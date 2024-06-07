interface SessionDetailProps{
  id: string
}

function SessionDetail({ id }:SessionDetailProps){
  return(
    <div>
      detalhe da sessao: id: {id}
    </div>
  )
}

export default SessionDetail