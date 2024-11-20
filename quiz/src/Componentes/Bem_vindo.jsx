import Imagens from '../Imagens/quiz.svg'
import { useContext } from 'react'
//O provider é o container e o context é para consumir as props
import { Quiz_context } from '../context/quiz'
import './Bem_vindo.css'

function Bem_vindo(){
    //Crio a const para conseguir acessar os valores do quiz_context, e o dispatch eu altero os valores

    /*No type eu chamo a ação que eu quero executar no momento que é o change_state mas se eu quiser executar uma ação de dica por exemplo eu uso type:'Dica'*/
    const [Quiz_state,dispatch] = useContext(Quiz_context)
    return(
       <div id="bem_vindo">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={()=> dispatch({type:'Change_stage'})}>Iniciar</button>
        <img src={Imagens} alt="Inicio do quiz" />
       </div>
    )
}

export default Bem_vindo