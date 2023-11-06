import React, { useState } from "react";
import perguntas from "./perguntas";

const Questionario = () => {
  const [nome, setNome] = useState("");
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState(
    Array(perguntas.length).fill(null)
  );
  const [pontuacao, setPontuacao] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [envioRealizado, setEnvioRealizado] = useState(false);

  const handleClickOpcao = (index, valor) => {
    if (nome.trim() !== "" && !jogoFinalizado) {
      const novaResposta = [...respostas];
      novaResposta[perguntaAtual] = valor;

      // Adiciona a pontuação da pergunta à pontuação total
      setPontuacao((prevPontuacao) => prevPontuacao + valor);

      setRespostas(novaResposta);
      if (perguntaAtual + 1 < perguntas.length) {
        setPerguntaAtual(perguntaAtual + 1);
      } else {
        finalizarJogo(novaResposta);
      }
    }
  };

  const finalizarJogo = (novaResposta) => {
    if (Array.isArray(novaResposta) && nome.trim() !== "" && !envioRealizado) {
      let pontuacaoFinal = novaResposta.reduce(
        (total, valor) => (valor !== null ? total + valor : total),
        0
      );
      setPontuacao(pontuacaoFinal);
      setRespostas(novaResposta.map((valor) => (valor !== null ? valor : 0)));
      setJogoFinalizado(true);
      setEnvioRealizado(true);

      setTimeout(() => {
        reiniciarJogo();
      }, 2000);
    }
  };

  const enviarDados = () => {
    const formData = new FormData();
    formData.append("nomeJogador", nome);
    formData.append("pontuacao", pontuacao);

    fetch(
      `http://localhost:${
        process.env.REACT_APP_PORTA_PHP || 3000
      }/backend/inserir_dados.php`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Dados inseridos com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };
  const reiniciarPagina = () => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  const reiniciarJogo = () => {
    if (!envioRealizado) {
      enviarDados(); // Envie os dados antes de reiniciar o jogo
      setNome("");
      setPerguntaAtual(0);
      setRespostas(Array(perguntas.length).fill(null));
      setPontuacao(0);
      setJogoFinalizado(false);
      setEnvioRealizado(false);
      reiniciarPagina(); // Inicia o cronômetro para reiniciar a página
    }
  };

  return (
    <form>
      <div>
        {jogoFinalizado ? (
          <div>
            <h2>Jogo Finalizado!</h2>
            <p>Pontuação Total: {pontuacao}</p>
            <button type="button" onClick={reiniciarJogo}>
              Voltar ao Início
            </button>
          </div>
        ) : (
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        )}
      </div>
      {perguntaAtual < perguntas.length && (
        <div>
          <p>{perguntas[perguntaAtual].pergunta}</p>
          <div>
            {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleClickOpcao(index, opcao.valor)}
                style={{
                  backgroundColor:
                    respostas[perguntaAtual] === index ? "#4CAF50" : "#ffffff",
                }}
              >
                {opcao.texto}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => finalizarJogo(respostas)}
        disabled={!nome.trim() || jogoFinalizado}
        
      >
        Finalizar Jogo
      </button>
    </form>
  );
};

export default Questionario;



//Sugestão

/*import React, { useState } from "react";
import perguntas from "./perguntas";
import "../styles/questionario.css";
import logo from "../images/Senai.png";
import { Link } from "react-router-dom";

const Questionario = () => {
  const [nome, setNome] = useState("");
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState(
    Array(perguntas.length).fill(null)
  );
  const [pontuacao, setPontuacao] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [envioRealizado, setEnvioRealizado] = useState(false);

  const handleClickOpcao = (index, valor) => {
    if (nome.trim() !== "" && !jogoFinalizado) {
      const novaResposta = [...respostas];
      novaResposta[perguntaAtual] = valor;

      // Adiciona a pontuação da pergunta à pontuação total
      setPontuacao((prevPontuacao) => prevPontuacao + valor);

      setRespostas(novaResposta);
      if (perguntaAtual + 1 < perguntas.length) {
        setPerguntaAtual(perguntaAtual + 1);
      } else {
        finalizarJogo(novaResposta);
      }
    }
  };

  const finalizarJogo = (novaResposta) => {
    if (Array.isArray(novaResposta) && nome.trim() !== "" && !envioRealizado) {
      let pontuacaoFinal = novaResposta.reduce(
        (total, valor) => (valor !== null ? total + valor : total),
        0
      );
      setPontuacao(pontuacaoFinal);
      setRespostas(novaResposta.map((valor) => (valor !== null ? valor : 0)));
      setJogoFinalizado(true);
      setEnvioRealizado(true);

      setTimeout(() => {
        reiniciarJogo();
      }, 2000);
    }
  };

  const enviarDados = () => {
    const formData = new FormData();
    formData.append("nomeJogador", nome);
    formData.append("pontuacao", pontuacao);

    fetch(
      `http://localhost:${
        process.env.REACT_APP_PORTA_PHP || 3000
      }/backend/inserir_dados.php`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Dados inseridos com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };
  const reiniciarPagina = () => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  const reiniciarJogo = () => {
    if (!envioRealizado) {
      enviarDados(); // Envie os dados antes de reiniciar o jogo
      setNome("");
      setPerguntaAtual(0);
      setRespostas(Array(perguntas.length).fill(null));
      setPontuacao(0);
      setJogoFinalizado(false);
      setEnvioRealizado(false);
      reiniciarPagina(); // Inicia o cronômetro para reiniciar a página
    }
  };

  return (
    <body>
      <div className="menu-container">
        <header>
          <Link to="/">
            <img src={logo} alt="Logo SENAI" className="logo-senai" />
          </Link>
        </header>
        <h1>Quiz Semana da Biblioteca</h1>
        {jogoFinalizado ? (
          <div className="overlay">
            <div className="centered">
              <h2>Jogo Finalizado!</h2>
              <p>Pontuação Total: {pontuacao}</p>
              <button type="button" onClick={reiniciarJogo}>
                Voltar ao Início
              </button>
            </div>
          </div>
        ) : (
          <form className="overlay">
            <div className="centered">
              <label>
                Nome:
                <input
                  type="text"
                  value={nome}
                  maxLength="40" // Adicionado para limitar para 20 caracteres
                  onChange={(e) => setNome(e.target.value)}
                />
              </label>
            </div>
            {perguntaAtual < perguntas.length && (
              <div className="centered">
                <p>{perguntas[perguntaAtual].pergunta}</p>
                <div>
                  {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleClickOpcao(index, opcao.valor)}
                      style={{
                        backgroundColor:
                          respostas[perguntaAtual] === index
                            ? "#4CAF50"
                            : "#ffffff",
                      }}
                    >
                      {opcao.texto}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => finalizarJogo(respostas)}
              disabled={!nome.trim() || jogoFinalizado}
            >
              Finalizar Jogo
            </button>
          </form>
        )}

        <footer>
          Jogo desenvolvido pela turma de Desenvolvimento de Sistemas Trilhas de
          Futuro 02/2022.
        </footer>
      </div>
    </body>
  );
};

export default Questionario; */