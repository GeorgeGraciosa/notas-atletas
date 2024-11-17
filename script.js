let atletas = [
  {
    nome: 'Cesar Abascal',
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: 'Fernando Puntel',
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: 'Daiane Jelinsky',
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: 'Bruno Castro',
    notas: [10, 10, 10, 9, 9.5],
  },
];

function calcularMedia() {
  // 1- Feito o loop para verificar os dados de cada atleta.
  for (let i = 0; i < atletas.length; i++) {
    let nome = atletas[i].nome;

    // 2- Ajustar o sort para 10 > 2
    let notas = atletas[i].notas.sort(function (a, b) {
      return a - b;
    });

    // 3- Usado .slice() para cortar a menor e a maior nota
    let notasCortadas = notas.slice(1, 4);

    // 4- Soma dos itens que sobraram
    let soma = 0;
    notasCortadas.forEach(function (nota) {
      soma = soma + nota;
    });

    // 5- Criada a variável para dividir
    let divisor = notasCortadas.length;
    let resultado = soma / divisor;
    console.log(
      `Atleta: ${nome}\nNotas Obtidas: ${notas}\nMédia Válida: ${resultado}`
    );
  }
}

calcularMedia();