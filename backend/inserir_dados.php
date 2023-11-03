<?php

header("Access-Control-Allow-Origin: *"); // Permite requisições de qualquer origem

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizbiblioteca";

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
?>