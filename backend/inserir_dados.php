<?php

header("Access-Control-Allow-Origin: *");

include_once 'conexao.php';

$backend_path = "http://localhost:3000/backend/";

try {
    
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(array('status' => 'error', 'message' => 'Conexão falhou: ' . $e->getMessage()));
    exit();
}

<<<<<<< Updated upstream
=======
$pdo = null; // Fecha a conexão (idealmente, isso deve ser feito no final de seu script)

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
    
>>>>>>> Stashed changes
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nomeJogador = isset($_POST['nomeJogador']) ? $_POST['nomeJogador'] : null;
    $classificacao = isset($_POST['classificacao']) ? $_POST['classificacao'] : null;
    $pontuacao = isset($_POST['pontuacao']) ? $_POST['pontuacao'] : null;

    if ($nomeJogador !== null && $pontuacao !== null && $classificacao !== null) {
        try {
            $stmt = $pdo->prepare('INSERT INTO jogadores (nome, classificacao, pontuacao) VALUES (:nome, :classificacao, :pontuacao)');
            $stmt->bindParam(':nome', $nomeJogador);
            $stmt->bindParam(':classificacao', $classificacao);
            $stmt->bindParam(':pontuacao', $pontuacao);

            $stmt->execute();

            exit();
        } catch (PDOException $e) {
        }
    } else {
    }
} else {
}

$pdo = null; // Fecha a conexão

/*
header("Access-Control-Allow-Origin: *"); // Permite requisições de qualquer origem
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizds";
try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão bem-sucedida!";
} catch (PDOException $e) {
    echo "Conexão falhou: " . $e->getMessage();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nomeJogador = isset($_POST['nomeJogador']) ? $_POST['nomeJogador'] : null;
    $pontuacao = isset($_POST['pontuacao']) ? $_POST['pontuacao'] : null;

    if ($nomeJogador !== null && $pontuacao !== null) {
        try {
            $stmt = $pdo->prepare('INSERT INTO jogadores (nome, pontuacao) VALUES (:nome, :pontuacao)');
            $stmt->bindParam(':nome', $nomeJogador);
            $stmt->bindParam(':pontuacao', $pontuacao);

            $stmt->execute();

            echo json_encode(array('status' => 'success'));
            exit();
        } catch (PDOException $e) {
            echo json_encode(array('status' => 'error', 'message' => 'Erro: ' . $e->getMessage()));
        }
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Parâmetros inválidos'));
    }
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Método de requisição inválido'));
}
$pdo = null; // Fecha a conexão

*/
?>