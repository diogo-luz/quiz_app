const perguntas = [
  {
    pergunta: `"Um jogador deve ser advertido, mesmo que o golo seja anulado, quando trepa as redes da vedação e/ou se aproxima dos espetadores, originando problemas de segurança". Concorda com esta situação em face do que está previsto nas Leis do Jogo?`,
    respostas: [
      `Discordo na situação quando não há golo, não haverá advertência.`,
      `Concordo totalmente.`,
      `Depende da equipa que marca do golo.`,
      `Depende da equipa que sofre o golo.`,
    ],
    correta: 1
  },
  {
    pergunta: `"Verifica-se quando um jogador usa ou tenta usar força excessiva ou brutalidade contra um adversário quando não está a disputar a bola ou contra um colega de equipa, um elemento oficial das equipas, um elemento da equipa de arbitragem, um espectador ou qualquer outra pessoa, independentemente de existir ou não contacto". Complete com uma das opções seguintes, para considerar esta definição tal como consta nas Leis do Jogo:`,
    respostas: [
      `Falta grosseira.`,
      `Conduta violenta.`,
      `Aviso.`,
      `Brutalidade.`,
    ],
    correta: 1
  },
  {
    pergunta: `Os pontapés-livres indiretos a favor da equipa atacante por uma infração cometida dentro da área de baliza adversária são executados a partir de que local?`,
    respostas: [
      `Do ponto mais distante da linha da área de baliza paralela à linha de baliza.`,
      `Do ponto mais próximo da linha da área de baliza paralela à linha de baliza.`,
      `Do ponto mais próximo da linha da área de baliza próximo à linha de baliza.`,
      `Do ponto mais próximo da linha da área de baliza paralela à linha lateral.`,
    ],
    correta: 1
  },
  {
    pergunta: `Um jogo para achar o vencedor, foi decidido através de pontapés da marca de penálti. Assim, um dos árbitros assistentes deve colocar-se na interceção da linha de baliza com a área de baliza. O outro árbitro assistente deve colocar-se onde e com que finalidade?`,
    respostas: [
      `No círculo central para controlar os jogadores.`,
      `Na zona central do campo para indicar quem vai executar o pontapé.`,
      `Sobre a linha limite do círculo central e para identificar os jogadores.`,
      `No espaço do círculo com o objetivo de permitir a saída do executante do pontapé.`,
    ],
    correta: 0
  },
  {
    pergunta: `Em cada pontapé de saída:`,
    respostas: [
      `Todos os jogadores devem encontrar-se no seu próprio meio-campo.`,
      `Os jogadores da equipa que não executa o pontapé de saída devem encontrar-se a distância de 9,15 m da bola, até que ela entre em jogo.`,
      `A bola é colocada no solo sobre o círculo central.`,
      `Nenhuma das opções está totalmente correta.`,
    ],
    correta: 3
  },
  {
    pergunta: `Os pontapés da marca de penálti têm lugar após o jogo terminar e, salvo estipulação em contrário, aplicam-se as Leis do Jogo em questão. Os jogadores expulsos durante o jogo não poderão participar nos pontapés da marca de penálti. Por outro lado, os avisos e os cartões amarelos, registados durante o jogo:`,
    respostas: [
      `Serão considerados nos pontapés da marca de penálti.`,
      `Serão só considerados os que tiverem lugar no final da 2ª parte.`,
      `Não serão considerados nos pontapés da marca de penálti.`,
      `Serão só considerados os que tiverem lugar durante a 2ª parte.`,
    ],
    correta: 2
  },
  {
    pergunta: `Cada equipa é responsável por selecionar os jogadores que vão executar os pontapés da marca de penalti de entre os jogadores habilitados no terreno de jogo no final do jogo, assim como por decidir a ordem pela qual esses jogadores os vão executar. O árbitro nestas circunstâncias:`,
    respostas: [
      `Não tem de ser informado dessa ordem.`,
      `Só terá de ser informado da ordem pela execução.`,
      `Toma registo da ordem dos primeiros cinco executantes.`,
      `O árbitro só deve ter conhecimento do 1º e 2º executante.`,
    ],
    correta: 0
  },
  {
    pergunta: `Sobre as substituições e expulsões durante a execução dos pontapés da marca de penalti, poderemos considerar:`,
    respostas: [
      `Um jogador, suplente ou jogador substituído pode ser advertido ou expulso.`,
      `Um guarda-redes que é expulso pode ser substituído por um jogador habilitado.`,
      `Um jogador que não seja o guarda-redes que esteja impossibilitado de continuar não pode ser substituído.`,
      `Todas as opções estão corretas.`,
    ],
    correta: 3
  },
  {
    pergunta: `Um pontapé-livre direto é concedido à equipa adversária do jogador que cometa algumas infrações contra um adversário de forma a que o árbitro considere imprudente, negligente ou com força excessiva. Assim, das opções seguintes escolha a mais correta:`,
    respostas: [
      `Tentar carregar um adversário.`,
      `Tentar saltar sobre um adversário.`,
      `Agredir ou tentar agredir/atingir (incluindo cabeçada).`,
      `Tentar empurrar.`,
    ],
    correta: 2
  },
  {
    pergunta: `Um pontapé-livre indireto é concedido à equipa adversária se um jogador cometer um determinado tipo de infração. Das opções seguintes, escolha a incorreta no que concerne ao sancionar este tipo de infrações:`,
    respostas: [
      `Jogar de uma maneira perigosa.`,
      `Impedir a progressão de um adversário sem qualquer contacto.`,
      `Impedir o guarda-redes de soltar a bola das mãos ou pontapeie ou tente pontapear a bola quando o guarda-redes não está a soltá-la das mãos.`,
      `Manifestar desacordo, usar linguagem e/ou ação(ões) ofensivo(s), injuriosos e/ou grosseiros ou cometer outras infrações verbais.`,
    ],
    correta: 2
  },
  {
    pergunta: `A ação de um jogador que, ao tentar jogar a bola, põe em risco a integridade física de alguém (incluindo ele próprio) e que é cometida na proximidade de um adversário, impedindo-o de jogar a bola por receio de ser lesionado, é conhecida por:`,
    respostas: [
      `Jogar de maneira perigosa.`,
      `Imprudência.`,
      `Negligência.`,
      `Força insignificante.`,
    ],
    correta: 0
  },
  {
    pergunta: `O apito não é necessário para assinalar um recomeço de jogo após uma interrupção devida:`,
    respostas: [
      `Uma lesão.`,
      `Uma substituição.`,
      `Uma advertência.`,
      `Um lançamento de bola ao solo.`,
    ],
    correta: 3
  },
  {
    pergunta: `Vai ser executado um pontapé de canto, e há jogadores que se agarram mutuamente. Nestas situações, o árbitro deve:`,
    respostas: [
      `Chamar a atenção de todo o jogador que agarre um adversário antes de a bola estar em jogo e advertir o jogador se ele continua a agarrar o adversário antes de a bola estar em jogo. Se a bola, entretanto, ficou em jogo, deve conceder um pontapé-livre direto ou um pontapé de penalti e advertir o jogador.`,
      `Chamar a atenção de todo o jogador que agarre um adversário antes de a bola estar em jogo e advertir o jogador se ele continua a agarrar o adversário antes de a bola estar em jogo. Se a bola, entretanto, ficou em jogo, deve conceder pontapé de penálti e advertir o jogador ou ambos os jogadores.`,
      `Chamar a atenção de todo o jogador que agarre um adversário antes de a bola estar em jogo e advertir o jogador se ele continua a agarrar o adversário antes de a bola estar em jogo. Se a bola, entretanto, ficou em jogo, não deve agir e deixar seguir o jogo normalmente.`,
      `Avisar que está a ver tudo o que está a ocorrer.`,
    ],
    correta: 0
  },
  {
    pergunta: `O jogador nº14 prepara-se para substituir o nº8. O jogador nº8 deixa o terreno e o nº14, antes de entrar em campo, agride um apanha-bolas. O árbitro expulsa-o e não permite mais nenhuma substituição deixando a equipa reduzida a 10 jogadores. Concorda com a decisão tomada?`,
    respostas: [
      `A decisão do árbitro foi correta, pois como a agressão ao apanha bolas foi durante o processo da substituição.`,
      `A decisão do árbitro não foi correta, pois como a agressão ao apanha bolas foi cometida antes da consumação da substituição. Assim, devia ter permitido que a substituição fosse efetuada por outro jogador suplente, ou permitir a continuidade do jogador que ia ser substituído.`,
      `A decisão do árbitro foi correta, pois como a agressão ao apanha bolas foi cometida com o jogador substituído já fora do terreno de jogo.`,
      `A decisão do árbitro não foi correta, pois como a agressão ao apanha bolas foi cometida antes da consumação da substituição. Assim, devia ter permitido que a substituição fosse efetuada por outro jogador suplente, mas não permitir a continuidade do jogador que ia ser substituído em virtude de este já ter abandonado o terreno de jogo.`,
    ],
    correta: 1
  },
  {
    pergunta: `Dois jogadores estão em luta pela posse da bola perto da área de canto. Tocada em último lugar pelo jogador defensor, a bola acabou por sair mesmo por cima da bandeira. Que sinalética deve ser feita pelo árbitro assistente que atua daquele lado?`,
    respostas: [
      `Devia assinalar lançamento lateral favorável à equipa defensora.`,
      `Devia assinalar pontapé de canto favorável à equipa atacante.`,
      `Devia assinalar lançamento lateral favorável à equipa atacante.`,
      `Devia assinalar pontapé de baliza.`,
    ],
    correta: 2
  },
  {
    pergunta: `Se o árbitro interromper o jogo devido a uma infração cometida por um jogador, dentro ou fora do terreno de jogo, contra um elemento estranho, o jogo recomeça com lançamento de bola ao solo a menos que:`,
    respostas: [
      `Seja assinalado um pontapé-livre indireto pelo facto de o jogador ter saído do terreno de jogo sem autorização do árbitro; o pontapé-livre indireto é executado no local onde a bola se encontrava.`,
      `Seja assinalado um pontapé-livre indireto pelo facto de o jogador ter saído do terreno de jogo sem autorização do árbitro; o pontapé-livre indireto é executado em qualquer ponto da linha lateral.`,
      `Seja assinalado um pontapé-livre indireto pelo facto de o jogador ter saído do terreno de jogo sem autorização do árbitro; o pontapé-livre indireto é executado do ponto da linha limite onde o jogador deixou o terreno de jogo.`,
      `Seja assinalado um pontapé-livre indireto pelo facto de o jogador ter saído do terreno de jogo sem autorização do árbitro; o pontapé-livre indireto é executado do ponto da linha próximo da zona de disputa do lance.`,
    ],
    correta: 2
  },
  {
    pergunta: `Quando uma barreira é formada por três ou mais defensores, todos os atacantes adversários devem permanecer a que distância?`,
    respostas: [
      `A 1 m de distância da barreira até que a bola entre em jogo.`,
      `A 3 m de distância da barreira até que a bola entre emjogo.`,
      `A 9,5 m de distância da barreira até que a bola entre em jogo.`,
      `Nenhuma das opções está correta.`,
    ],
    correta: 3
  },
  {
    pergunta: `Deve ser concedido tempo adicional para permitir que um pontapé de penalti seja executado e concluído no final de cada parte do jogo ou no final do prolongamento. Quando é concedido tempo adicional, o pontapé de penálti está concluído quando?`,
    respostas: [
      `Depois de o pontapé ter sido marcado, a bola termina o seu movimento, deixa de estar em jogo, é jogada por qualquer jogador (excluindo o executante) que não o guarda-redes que defende, ou o árbitro interrompe o jogo devido a uma infração por parte do executante ou da equipa do executante.`,
      `Depois de o pontapé ter sido marcado, a bola termina o seu movimento, deixa de estar em jogo, é jogada por qualquer jogador (incluindo o executante) que não o guarda-redes que defende, ou o árbitro interrompe o jogo devido a uma infração por parte do executante ou da equipa do executante.`,
      `Depois de o pontapé ter sido marcado, a bola termina o seu movimento, deixa de estar em jogo, é jogada por qualquer jogador (incluindo o executante) que não o guarda-redes que defende, ou o árbitro interrompe o jogo devido a uma infração por parte da defensora ou da equipa da defensora.`,
      `Depois de o pontapé ter sido marcado, a bola termina o seu movimento, deixa de estar em jogo, é jogada por qualquer jogador (incluindo o guarda-redes que defende), ou o árbitro verifica no seu poder discricionário que o efeito da jogada está concluído.`,
    ],
    correta: 1
  },
  {
    pergunta: `Durante a execução de um pontapé-livre, o árbitro assistente deve colocar-se na linha do penúltimo defensor a fim de controlar o fora de jogo. Entretanto ele deve estar pronto para proceder de que forma?`,
    respostas: [
      `Seguir a trajetória da bola, correndo ao longo da linha lateral, até à bandeira de canto em todas as circunstâncias.`,
      `Seguir a trajetória da bola e verificar se esta muda de equipa.`,
      `Seguir a trajetória da bola, correndo ao longo da linha lateral, até à bandeira de canto, no caso de o remate ser direto à baliza`,
      `Seguir a trajetória da bola até à linha de baliza.`,
    ],
    correta: 2
  },
  {
    pergunta: `Em situações de confrontações em grupo de jogadores, o árbitro assistente mais próximo pode penetrar no terreno para ajudar o árbitro. O outro árbitro assistente deve observar e tomar nota dos pormenores do incidente. E o quarto árbitro (se nomeado)?`,
    respostas: [
      `O quarto árbitro deve aproximara-se do árbitro.`,
      `O quarto árbitro deve correr para dentro do terreno de jogo.`,
      `O quarto árbitro deve permanecer nas proximidades das áreas técnicas.`,
      `O quarto árbitro deve permanecer de costas para o terreno de jogo.`,
    ],
    correta: 2
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