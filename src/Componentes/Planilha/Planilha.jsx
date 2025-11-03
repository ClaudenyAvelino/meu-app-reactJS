import './Planilha.css';

// O componente agora só recebe os 'dados' prontos via props
//Essa linha significa que o componente recebe uma prop chamada dados.
//é um objeto passado de um componente pai para um componente filho.
function Planilha({ dados }) {
  return (
    <div className="app">
      <h2>Dados da Planilha</h2>
      <table>
        <thead>
          <tr>
            {/* Verifica se existem dados antes de tentar renderizar o cabeçalho */}
            {dados[0] &&
              Object.keys(dados[0]).map((coluna) => (
                <th key={coluna}>{coluna}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {/* Mapeia os dados recebidos para criar as linhas */}
          {dados.map((linha, idx) => (
            <tr key={idx}>
              {Object.values(linha).map((valor, i) => (
                <td key={i}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Planilha;