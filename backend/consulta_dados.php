<?php
include 'conexao.php';
header("Access-Control-Allow-Origin: *");

try {
    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "SELECT * FROM jogadores ORDER BY pontuacao DESC";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = array();

        while ($row = $result->fetch_assoc()) {
            $updateposicao = "UPDATE jogadores SET posicao = ? WHERE id = ?";
            $stmt = $conn->prepare($updateposicao);
            $stmt->bind_param('ii', $posicao, $row['id']);
            $stmt->execute();

            $posicao++;

            $data[] = $row; // Adiciona os dados ao array
        }

        // Retorna os dados como JSON
        echo json_encode($data);
    } else {
        echo json_encode(array('message' => 'Nenhum resultado encontrado'));
    }
} catch (Exception $e) {
    echo json_encode(array('error' => 'Erro ao conectar ao banco de dados: ' . $e->getMessage()));
}
?>
