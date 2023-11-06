<?php

include_once 'conexao.php';

try {
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    } else {
    }

    $sql = "CREATE TABLE IF NOT EXISTS jogadores(
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        pontuacao INT(6) NOT NULL,
        posicao INT(6) UNSIGNED
    )";

    if ($conn->query($sql) === TRUE) {
    } else {
        echo "Erro ao criar tabela!" . $conn->error;
    }

    $conn->close();
} catch (Exception $e) {
    echo "Erro ao conectar ao banco de dados: " . $e->getMessage();
}


// Sugestão


/*<?php
include 'conexao.php';
$sql = "CREATE TABLE IF NOT EXISTS jogadores(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    pontuacao INT(6) NOT NULL,
    posicao int(6) UNSIGNED
    )";

    if($conn -> query($sql)=== TRUE){
        echo "Tabela criada com sucesso ou já existente!";
    } else {
        echo "Erro ao criar tabela!" . $conn->error;
    }
?>*/ 

?>

