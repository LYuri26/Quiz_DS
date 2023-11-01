<?php

include 'conexao.php'; // Incluindo o arquivo de conexão

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 1 - Obter os dados do formulário (substitua com os nomes reais dos campos)
    $nomeJogador = $_POST['nomeJogador'];
    $classificacao = $_POST['classificacao'];
    $pontuacao = $_POST['pontuacao'];

    try {
        // 2 - Criar uma query para inserir dados
        $stmt = $pdo->prepare('INSERT INTO jogadores (nome, classificacao, pontuacao) VALUES (:nome, :classificacao, :pontuacao)');
        $stmt->bindParam(':nome', $nomeJogador);
        $stmt->bindParam(':classificacao', $classificacao);
        $stmt->bindParam(':pontuacao', $pontuacao);

        // 3 - Executar a query
        $stmt->execute();

        // 4 - Redirecionar para a página de listagem de jogadores (ou para onde desejar)
        header('Location: lista_jogadores.php');
        exit();
    } catch (PDOException $e) {
        // Lida com erros de banco de dados
        echo 'Erro: ' . $e->getMessage();
    }
}

// 999 - Fechar a conexão (idealmente, isso deve ser feito no final de seu script)
$pdo = null;


// Criar um script php para inserir dados no banco de mysql 
// Tabela: usuarios
// Campos: id, nome, pontuacao, posicao

// 1 - Conectar no banco de dados - DONE
// 2 - Criar uma query para inserir dados - WORKING...
// 3 - Executar a query - WORKING...
// 999 - Fechar a conexão - WORKING...

/* Rodrigo: Sua tarefa é configurar o arquivo inserir_dados.php.
Assim que for inserido um dado no quesitonario.js deverá ser realizado o salvamento talbea do banco de dados jogadores, o nome do jogador, sua classificação, mostras a pontuações. */  

// 1 - Conectar no banco de dados
    /* try {
        $pdo = new PDO('mysql:host=localhost;dbname=biblioteca', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        die();
    } */ 
    
    /* a partir daqui código antigo RB
    include 'conexao.php'; // Incluindo o arquivo de conexão
    
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $botaoResposta = $_POST['botaoResposta'];
    $stmt->bindValue(':botaoResposta', $botaoResposta);
    // 2 - Criar uma query para inserir dados
    $stmt = $pdo->prepare('INSERT INTO jogadores VALUES (null, João, botaoResposta, 1)');

    // 3 - Executar a query
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);

    // 5 - Redirecionar para a página de listagem de usuários
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->prepare('SELECT * FROM jogadores');
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    }
// 999 - Fechar a conexão
$pdo = null;
?>
antigo
*/

?>