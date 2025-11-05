import './AlunoDestaque.css';

// O componente recebe a prop 'aluno' que enviamos do App.jsx
function AlunoDestaque({ aluno }) {
  // Se o aluno ainda não foi carregado, não mostra nada
  if (!aluno) {
    return <div className="destaque-carregando">Carregando destaque...</div>;
  }

  // Quando os dados do aluno chegam, exibe o cartão
  return (
    <div className="aluno-destaque-container">
      <h3>Aluno em Destaque</h3>
      <div className="destaque-info">
        <h2>{aluno.Nome}</h2>
        <p>Idade: {aluno.Idade}</p>
        <p>Cidade: {aluno.Cidade}</p>

      </div>
    </div>
  );
}

export default AlunoDestaque;