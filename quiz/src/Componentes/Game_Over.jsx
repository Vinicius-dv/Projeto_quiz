import './Game_Over.css'
import { useContext } from 'react'
import { Quiz_context } from '../context/quiz'

import WellDone from '../Imagens/welldone.svg'

function Game_Over(){
    const [Quiz_state,dispatch] = useContext(Quiz_context)
    return(
        <div id='Game_over'>
            <h2>Fim de jogo</h2>
            <p>Pontuação: {Quiz_state.score}</p>
            <p>Voce acertou {Quiz_state.score} de {Quiz_state.questions.length} perguntas</p>
            <img src ={WellDone} alt="Fim do quiz"/>
            <button onClick={()=> dispatch({type:'New_game'})}>Reiniciar</button>
        </div>
    )
}

export default Game_Over