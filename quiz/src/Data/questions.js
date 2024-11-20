// Aqui eu irei pegar os dados do quiz quando o usuario selecionar javascript, como se fosse um banco de dados

const data = [
    {
      question: "O que é Vanilla JavaScript?",
      options: [
        "JavaScript puro",
        "Uma biblioteca JavaScript",
        "Um framework JavaScript",
        "Um compilador de JavaScript",
      ],
      answer: "JavaScript puro",
    },
    {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        resposta: "const",
    },
    {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
    },
    {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
    },
    {
        question:"Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
    },
  ];
  
  export default data;