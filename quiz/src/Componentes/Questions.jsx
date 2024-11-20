import './Questions.css'
import { Quiz_context, Quiz_provider } from "../context/quiz"
import { useContext } from "react"

function Questions(){
    const [Quiz_state,dispatch] = useContext(Quiz_context)
    //Como currentQuestion contém o indice das perguntas, para eu saber em qual pergunta eu estou eu passo o indice do currentQuestion
    const currentQuestion = Quiz_state.questions[Quiz_state.currentQuestion]
    return(
        <div id='questions'>
            <p>Pergunta {Quiz_state.currentQuestion +1} de {Quiz_state.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options_container">
                <p>Opções</p>
            </div>
            <button>Continuar</button> 
        </div>
    )
}

export default Questions