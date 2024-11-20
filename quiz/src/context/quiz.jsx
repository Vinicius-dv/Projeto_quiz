import {createContext,useReducer} from 'react'
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
}


/*
então o quizReducer pode definir uma ação 
como dar uma dica pro usuario ou mudar
 o estado pra fim ou jogando 
*/
const quizReducer = (state,action) =>{
    console.log(state,action)

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