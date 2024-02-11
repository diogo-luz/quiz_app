const perguntas = [
  {
    pergunta: "Qual palavra-chave é usada para declarar uma constante em JavaScript?",
    respostas: [
      "var",
      "let",
      "const",
    ],
    correta: 2
  },
  {
    pergunta: "O que é NaN em JavaScript?",
    respostas: [
      "Not a Number",
      "Null and None",
      "Now and Never",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para converter uma string em um número inteiro?",
    respostas: [
      "parseInt()",
      "parseFloat()",
      "toInteger()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
    respostas: [
      "//",
      "/*",
      "#",
    ],
    correta: 0
  },
  {
    pergunta: "O que é um array em JavaScript?",
    respostas: [
      "Um tipo de dado que representa um número",
      "Um objeto que armazena pares chave-valor",
      "Uma estrutura que armazena uma coleção de elementos",
    ],
    correta: 2
  },
  {
    pergunta: "Qual operador é usado para comparar tanto o valor quanto o tipo em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "Como você escreve um loop 'for' em JavaScript?",
    respostas: [
      "for (i = 0; i < 10; i++)",
      "loop (i = 0; i < 10; i++)",
      "repeat (i = 0; i < 10; i++)",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
    ],
    correta: 0
  },
  {
    pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: [
      "console.log()",
      "print()",
      "display()",
    ],
    correta: 0
  },
  {
    pergunta: "O que é hoisting em JavaScript?",
    respostas: [
      "Um erro de sintaxe",
      "O comportamento de mover declarações para o topo do escopo antes da execução",
      "Uma técnica de otimização de código",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalPerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#certas span');
mostrarTotal.textContent = `${corretas.size} de ${totalPerguntas}`;

for(const item of perguntas) {
  // alert(item.pergunta)
  const quizItem = template.content.cloneNode(true);

  quizItem.querySelector('h3').textContent = item.pergunta;

  for(const resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name',`pergunta-${perguntas.indexOf(item)}`);
    dt.querySelector('input').value = item.respostas.indexOf(resposta);
    
    dt.querySelector('input').onchange = (event) => {
      const isCorrect = event.target.value == item.correta;

      corretas.delete(item);
      if (isCorrect) {
        corretas.add(item);
      }
      //corretas.size para o numero de certas

      mostrarTotal.textContent = `${corretas.size} de ${totalPerguntas}`;
    }

    quizItem.querySelector('dl').appendChild(dt);
  }

  quizItem.querySelector('dl dt').remove();

  // coloca a pergunta no ecra
  quiz.appendChild(quizItem);
}