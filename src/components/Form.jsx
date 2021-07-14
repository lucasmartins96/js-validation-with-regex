import React, { useState } from 'react';
import styled from 'styled-components';

const MyForm = styled.form`
  border: 1px solid black;
  /* display: flex; */
  /* flex-direction: column; */
  height: 40vh;
  width: 700px;

  label {
    display: flex;
    flex-direction: column;
  }

  div {
    height: 3vh;
  }
`;

function Form () {
  const INITIAL_STATE_FORM_DATA = {
    nickname: '',
    email: '',
    password: '',
  }
  
  const INITIAL_STATE_FIELDS_ERROR = {
    isNicknameError: false,
    isEmailError: false,
    isPasswordError: false,
  }
  const [formData, setFormData] = useState(INITIAL_STATE_FORM_DATA);
  const [fieldsError] = useState(INITIAL_STATE_FIELDS_ERROR);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  }

  const nicknameField = () => {
    const { nickname } = formData;
    const { isNicknameError } = fieldsError;
    return (
      <>
        <label htmlFor="nickname">
          nickname
          <input
            type="text"
            name="nickname"
            id="nickname"
            value={nickname}
            onChange={handleChange}
          />
        </label>
        <div>{isNicknameError && 'insira somente letras sem espaços'}</div>
      </>
    );
  }

  const emailField = () => {
    const { email } = formData;
    const { isEmailError } = fieldsError;
    return (
      <>
        <label htmlFor="email">
          email
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <div>{isEmailError && 'insira apenas endereços de e-mail do gmail'}</div>
      </>
    );
  }

  const passwordField = () => {
    const { password } = formData;
    const { isPasswordError } = fieldsError;
    return (
      <>
        <label htmlFor="password">
          senha
          <input type="password" name="password" id="password" value={password} />
        </label>
        <div>
          {isPasswordError &&
            'a senha deve ter cinco (5) letras maiúsculas, seis (6) símbolos e dois hifens(-)'}
        </div>
      </>
    );
  }

  const buttonSubmit = () => {
    // const { nickname, email, password, fieldsError } = state;
    const handleSubmit = () => {
      
    };

    return (
      <button type="button" onClick={() => handleSubmit()}>
        Enviar
      </button>
    );
  }

  return (
    <MyForm>
      {nicknameField()}
      {emailField()}
      {passwordField()}
      {buttonSubmit()}
    </MyForm>
  );
}

export default Form;
