import { Container } from "../Container"
import HomeCard from "../HomeCard"

function NextSessions(){
  return (
    <div className="w-[50%]">
      <h1>Próximas sessões</h1>
    </div>
  )
}

function TodoList(){
  return (
    <div className="w-[50%]">
      <h2>A fazer</h2>
    </div>
  )
}

export function HomePage(){
  return (
    <Container className="w-full flex flex-wrap flex-row justify-between items-start">
      <HomeCard title="Próximas Sessões" className="w-[48%] mx-2">
        <NextSessions />
      </HomeCard>
      <HomeCard title="Lista de Tarefas" className="w-[48%] mx-2">
        <TodoList />
      </HomeCard>
    </Container>
  )
}
