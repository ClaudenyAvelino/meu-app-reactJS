// Importa os hooks useState e useEffect do React
import { useState, useEffect } from 'react';

// Importa os componentes da aplicação
import Banner from './Componentes/Banner/Banner';
import BemVindo from './Componentes/BemVindo/BemVindo';
import Saudacao from './Componentes/Saudacao/Saudacao';
import Planilha from './Componentes/Planilha/Planilha';
import AlunoDestaque from './Componentes/AlunoDestaque/AlunoDestaque';

// Importa o CSS principal da aplicação
import './App.css';

// Componente principal da aplicação
function App() {

  // Cria um estado chamado "dados" para armazenar a lista de alunos
  const [dados, setDados] = useState([]);

  // useEffect executa o código dentro dele apenas uma vez, após o componente ser montado
  useEffect(() => {

    // URL pública da planilha CSV do Google
    const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQRJtbSgNEmjq7rXZQEeY-9diILR-YX_hDC83V6AoBV4rH_qC7LFT-pLmRy7znZeU3oi5uJcJTJIBAH/pub?output=csv";

    // Faz a requisição para buscar os dados da planilha
    fetch(URL)
      .then(res => res.text()) // Converte a resposta em texto
      .then(csv => {
        // Divide o CSV em linhas e cada linha em colunas
        const [cabecalho, ...linhas] = csv.split("\n").map(l => l.split(","));

        // Transforma cada linha em um objeto com chave = coluna, valor = dado
        const objetos = linhas.map(linha => {
          return cabecalho.reduce((obj, col, i) => {
            obj[col.trim()] = linha[i]; // Atribui o valor da célula à chave correspondente
            return obj;
          }, {});
        });

        // Atualiza o estado "dados" com os objetos da planilha
        setDados(objetos);
      })
      .catch(err => console.error("Erro ao carregar a planilha:", err)); // Tratamento de erro
  }, []); // Array vazio: o efeito executa apenas uma vez

  // Pega o primeiro aluno da lista para destacar; se não houver, retorna null
  const alunoDestaque = dados[0] || null;

  // JSX que define a estrutura visual da aplicação
  return (
    <div className="App">
      <Banner /> {/* Componente do banner principal */}
      <main className="conteudo-principal">
        <BemVindo /> {/* Mensagem de boas-vindas */}
        <Saudacao /> {/* Saudação personalizada */}

        {/* Passa a lista de alunos para o componente Planilha */}
        <Planilha dados={dados} />

        {/* Passa o aluno de destaque para o componente AlunoDestaque */}
        <AlunoDestaque aluno={alunoDestaque} />
      </main>
    </div>
  );
}

// Exporta o componente App para ser usado em outros arquivos
export default App;
