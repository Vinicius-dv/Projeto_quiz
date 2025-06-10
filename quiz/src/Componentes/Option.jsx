import './Option.css'
import { useContext } from 'react'
import { Quiz_context } from '../context/quiz'

function Option({option,selectOption,answer}){
    const [Quiz_state,dispatch] = useContext(Quiz_context)

    return(
        <div className={`option ${Quiz_state.answerSelected && option === answer ? 'correct':''
        } ${Quiz_state.answerSelected && option !== answer ? 'error':''}
        `} onClick={()=>selectOption()}>
            <p>{option}</p>
        </div>
    )
}

export default Option