import "./App.css"
import Bem_vindo from './Componentes/Bem_vindo'
import { useContext, useEffect } from "react"
import Questions from "./Componentes/Questions"
import { Quiz_context } from "./context/quiz"
import Game_Over from "./Componentes/Game_Over"

function App() {
  const [Quiz_state,dispatch] = useContext(Quiz_context)
  useEffect(()=>{
    //O dispatch serve para dar uma ação e a ação que eu estou dando é embaralhar as perguntas
    dispatch({type:'Reoder_questions'})
  },[])
  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {Quiz_state.gameStage === 'Start' && <Bem_vindo/>}
      {Quiz_state.gameStage === 'Playing' && <Questions/>}
      {Quiz_state.gameStage === 'End' && <Game_Over/>}
    </div>
  )
}

export default App
