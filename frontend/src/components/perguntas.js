const perguntas = ([        {
    pergunta: "Qual a forma correta de declarar uma variável em JavaScript?", // Define a primeira pergunta
    opcoes: [ // Define as opções para a primeira pergunta
      { texto: "var nomeDaVariavel", valor: 0 },
      { texto: "let nomeVar =", valor: 10 }, // A resposta correta tem um valor de 10
      { texto: "const nomeDaVariavel", valor: 0 },
      { texto: "var = nomeVar", valor: 0 },
    ],
},
{
    pergunta: "Qual é o valor inicial de uma variavel não inicializada em JavaScript?", // Define a segunda pergunta
    opcoes: [ // Define as opções para a segunda pergunta
      { texto: "Var", valor: 0 },
      { texto: "Undefined", valor: 10 }, // A resposta correta tem um valor de 10
      { texto: "Null", valor: 0 },
      { texto: "AutoIncrement", valor: 0 },
    ],
  },
  {
    pergunta: "Qual das opções representa uma string em JavaScript?", // Define a terceira pergunta
    opcoes: [ // Define as opções para a terceira pergunta
      { texto: "Olá mundo!", valor: 0 },
      { texto: "True", valor: 0 }, // A resposta correta tem um valor de 10
      { texto: "False", valor: 0 },
      { texto: "123", valor: 10 },
    ],
  },
  {
    pergunta: "O seguinte endereço de internet: http://www.youtube.com?", // Define a quarta pergunta
    opcoes: [ // Define as opções para a quarta pergunta
      { texto: "XML", valor: 0 },
      { texto: "FTP", valor: 0 },
      { texto: "URL", valor: 10 }, // A resposta correta tem um valor de 10
      { texto: "UML", valor: 0 },
    ],
  },
  {
    pergunta: "As chaves primárias são caracterizadas por?", // Define a quinta pergunta
    opcoes: [ // Define as opções para a quinta pergunta
      { texto: "Ter valores nulos", valor: 0 },
      { texto: "Ter repetição de tuplas", valor: 0 }, 
      { texto: "Poder ter dois ou mais registros de mesmo valor", valor: 0 },
      { texto: "Não ter valores nulos", valor: 10 }, // A resposta correta tem um valor de 10
    ],
  },
  {
  pergunta: "A chave formada através de um relacionamento com a chave primária de outra tabela é denominada?", // Define a sexta pergunta
    opcoes: [ // Define as opções para a quarta pergunta
      { texto: "Chave abstrata", valor: 0 },
      { texto: "Chave mista", valor: 0 },
      { texto: "Chave estrangeira", valor: 10 }, // A resposta correta tem um valor de 10
      { texto: "Chave global", valor: 0 },
    ],
  },

{
  pergunta: "O que significa a sigla CSS?", // Define a sexta pergunta
    opcoes: [ // Define as opções para a quarta pergunta
      { texto: "Construction of Style Sites", valor: 0 },
      { texto: "Construction of Style Sheets", valor: 0 },
      { texto: "Cascading Style Sheets", valor: 10 }, // A resposta correta tem um valor de 10
      { texto: "Cascading Style Sites", valor: 0 },
    ],
  },

  {
    pergunta: "Qual proprieadade CSS controla o tamanho do texto?", // Define a sétima pergunta
    opcoes: [ // Define as opções para a sétima pergunta
        { texto: "Font-size", valor: 10 }, // A resposta correta tem um valor de 10
        { texto: "Text-size", valor: 0 },
        { texto: "Text-height", valor: 0 },
        { texto: "Font-height", valor: 0 },
      ],
    },
    
    {
      pergunta: "Qualquer coisa?", // Define a oitava pergunta
      opcoes: [ // Define as opções para a oitava pergunta
          { texto: "Opção A", valor: 0 },
          { texto: "Opção B", valor: 0 },
          { texto: "Opção C", valor: 0 },
          { texto: "Opção D", valor: 0 },
        ]
      }
    ]
);
export default perguntas;