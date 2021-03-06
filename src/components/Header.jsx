import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  border: 1px solid black;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40vh;
  
  h1 {
    text-align: center;
  }

  ul {
    list-style-position: inside;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Validação JS com Regex</h1>
      <p>Este é um simples formulário com as validações feitas somente em regex.</p>
      <p>Para liberar o botão de envio, atenda as seguintes condições no preenchimento:</p>
      <ul>
        <li>o nome de usuário deve ter SOMENTE letras e nenhum espaço</li>
        <li>o email deve ser SOMENTE @gmail.com (pode ser um endereço fictício desde que seja um email válido)</li>
        <li>a senha deve ter 5 letras maiúsculas, 6 símbolos e 2 hífens</li>
      </ul>
    </HeaderWrapper>
  );
}

export default Header;
