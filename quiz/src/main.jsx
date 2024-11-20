import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//Isso aqui é o 'container do meus componentes, onde eu posso pegar as props do pai sem precisar criar elas nos filhos'
import { Quiz_provider } from './context/quiz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quiz_provider>
      <App />
    </Quiz_provider>
  </StrictMode>,
)
