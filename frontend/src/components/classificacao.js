import React, { useEffect } from 'react';

function Classificacao() {
    useEffect(() => {
        fetch("http://localhost:3000/backend/consulta_dados.php")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Erro:", error));
    }, []);

    return (
        <body>
            <table>
                <caption>PÓDIO</caption>
                <tr>
                    <th>Classificação</th>
                    <th>Nome</th>
                    <th>Pontuação</th>
                </tr>
            </table>
        </body>
    );
}

export default Classificacao;
