import {act, createContext,useReducer} from 'react'
import questions  from '../Data/questions'

const stages =['Start','Playing','End']

/*
Então o initialStage define o estado inicial, 
e o quizReducer pode mudar o estado ou a 
ação dele. Ai quando eu acesso o type do 
quizReducer ele vai mee retornar Change_stage*/

const InitialStage = {
    gameStage: stages[0],
    questions,
    currentQuestion: 0,
    score:0,
    //Isso aqui vai servir para ver se o usuario selecionou uma opção, se ele selecionar, ele consegue apertar o botão de continuar, agr se for false ele não consegue
    answerSelected: false,
}


/*
então o quizReducer pode definir uma ação 
como dar uma dica pro usuario ou mudar
 o estado pra fim ou jogando 
*/
const quizReducer = (state,action) =>{

    /*
         type serve para executar uma ação 
         específica no quizReducer. 
         Ele é como um comando que 
         você envia para o quizReducer 
         dizendo: "Faça isso agora!"
    */
    switch(action.type){
        case 'Change_stage':
        return {
            //Aqui eu pego todas as propriedades do state, e acesso apenas o gameStage, para não vir com as propriedades que eu quero
            ...state,
            gameStage:stages[1],
        }
        case 'Reoder_questions':
        //Isso serve para embaralhar as questões
        const reorder_questions = questions.sort(()=>{
            return Math.random() -0.5
        })
        return {
            //Aqui eu acesso apenas o reoder_questions que embaralha as questões
            ...state,
            questions:reorder_questions,
        }

        case 'Change_question':
        const next_question = state.currentQuestion + 1
        let endGame = false

        if(!questions[next_question]){
            endGame = true
        }
        return {
            ...state,
            currentQuestion: next_question,
            //Se chagar no fim ele muda o estado, se não continua normal
            gameStage:endGame ? stages[2]:state.gameStage,
            answerSelected: false
        }

        case 'New_game':
        return InitialStage

        case 'Check_answer':
        //se a resposta ja foi selecionada eu retorno o estado atual e não conto mais no score 
        if(state.answerSelected) return state
        const answer = action.payload.answer
        const option = action.payload.option
        let correctResposta = 0
        if(answer === option) correctResposta = 1
        return {
            ...state,
            score: state.score + correctResposta,
            answerSelected: option,
        }
        default:
        return state
    }
}

export const Quiz_context = createContext()

//Isso aqui vai servir como um container ai dentro dele eu boto outros componentes, que no caso éo children
//E o provider serve para passar dados para os filhos que tiverem dentro de Quiz_context.Provider, ai o valor que eu passar para Quiz_context.Provider eu consigo acessar em qualquer filho do Quiz_context.Provider sem precisar usar props nos filhos
//o provider, é como uma props mas sem precisar passar as props nos filhos em resumo
export const Quiz_provider = ({children})=>{
    const value = useReducer(quizReducer,InitialStage)
    
    return <Quiz_context.Provider value={value} >{children}</Quiz_context.Provider>
} 