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

  const handleClickOpcao = (index, valor) => {
    if (nome.trim() !== "" && !jogoFinalizado) {
      const novaResposta = [...respostas];
      novaResposta[perguntaAtual] = valor;
      setRespostas(novaResposta);
      if (perguntaAtual + 1 < perguntas.length) {
        setPerguntaAtual(perguntaAtual + 1);
      } else {
        finalizarJogo(novaResposta);
      }
    }
  };

  const finalizarJogo = (novaResposta) => {
    if (Array.isArray(novaResposta) && nome.trim() !== "") {
      let pontuacaoFinal = novaResposta.reduce(
        (total, valor) => total + valor,
        0
      );
      setPontuacao(pontuacaoFinal);
      setJogoFinalizado(true);
    }
  };

  const portaPhp = process.env.REACT_APP_PORTA_PHP || 3000;
  const enviarDados = () => {
    const formData = new FormData();
    formData.append("nomeJogador", nome);
    formData.append("pontuacao", pontuacao);

    fetch(`http://localhost:${portaPhp}/backend/inserir_dados.php`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Dados inseridos com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  const reiniciarJogo = () => {
    setNome("");
    setPerguntaAtual(0);
    setRespostas(Array(perguntas.length).fill(null));
    setPontuacao(0);
    setJogoFinalizado(false);
  };

  return (
    <form>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
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
      {jogoFinalizado ? (
        <div>
          <h2>Jogo Finalizado!</h2>
          <p>Pontuação Total: {pontuacao}</p>
          <button type="button" onClick={enviarDados}>
            Enviar Dados
          </button>
          <button type="button" onClick={reiniciarJogo}>
            Voltar ao Início
          </button>
        </div>
      ) : (
        <button type="button" onClick={finalizarJogo} disabled={!nome.trim()}>
          Finalizar Jogo
        </button>
      )}
    </form>
  );
};

export default Questionario;
