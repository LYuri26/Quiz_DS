<?php

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

?>