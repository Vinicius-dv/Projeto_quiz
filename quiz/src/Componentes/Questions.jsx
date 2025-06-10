import './Questions.css'
import { Quiz_context, Quiz_provider } from "../context/quiz"
import { useContext } from "react"
import Option from './Option'

function Questions(){
    const [Quiz_state,dispatch] = useContext(Quiz_context)
    //Como currentQuestion contém o indice das perguntas, para eu saber em qual pergunta eu estou eu passo o indice do currentQuestion
    const currentQuestion = Quiz_state.questions[Quiz_state.currentQuestion]
    const onSelectOption = (option)=>{
        dispatch({
            type:'Check_answer',
            payload:{answer:currentQuestion.answer,option}
        })
    }
    return(
        <div id='questions'>
            <p>Pergunta {Quiz_state.currentQuestion +1} de {Quiz_state.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options_container">
                {currentQuestion.options.map((option)=>(
                    <Option option={option} key={option} answer = {currentQuestion.answer} selectOption = {()=>onSelectOption(option)} />
                ))}
            </div>
                
            {Quiz_state.answerSelected &&(
                <button onClick={() => dispatch({ type: 'Change_question' })}>Continuar</button> 
            )}
        </div>
    )
}

export default Questions