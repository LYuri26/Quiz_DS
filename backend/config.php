<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizds";

$backend_path = "http://localhost:3000/backend/";

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
} else {
    echo "Conexão bem-sucedida!";
}
?>

?>