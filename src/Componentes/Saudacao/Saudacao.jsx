import { useState } from 'react';
import './Saudacao.css';

function Saudacao() {
  // Estado para guardar o que o usuário está digitando
  const [inputValue, setInputValue] = useState('');

  // Estado para guardar o nome final, que controla se o input ou a mensagem aparece
  const [nomeEnviado, setNomeEnviado] = useState('');

  // Função chamada quando o formulário é enviado (pressionando Enter)
  const handleFormSubmit = (evento) => {
    // Impede o comportamento padrão do navegador, que é recarregar a página
    evento.preventDefault();

    // Só envia se o campo não estiver vazio
    if (inputValue.trim() !== '') {
      setNomeEnviado(inputValue);
    }
  };

  // Se um nome já foi enviado, mostra a mensagem de saudação
  if (nomeEnviado) {
    return (
      <div className="saudacao-container">
        <p className="saudacao-mensagem">Olá, {nomeEnviado}!</p>
      </div>
    );
  }

  // Se nenhum nome foi enviado ainda, mostra o formulário com o campo de input
  return (
    <form className="saudacao-container" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Digite seu nome e pressione Enter"
        className="saudacao-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus // Opcional: foca no campo assim que a página carrega
      />
    </form>
  );
}

export default Saudacao;