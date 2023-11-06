<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizds";

$backend_path = "http://localhost:3000/backend/";


try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Conexão falhou: " . $e->getMessage();
}

?>
