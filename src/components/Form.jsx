import React, { Component } from 'react';
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

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
      email: '',
      password: '',
      fieldsError: {
        nickname: false,
        email: false,
        password: false,
      },
    };
    this.nicknameField = this.nicknameField.bind(this);
    this.emailField = this.emailField.bind(this);
    this.passwordField = this.passwordField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buttonSubmit = this.buttonSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  nicknameField() {
    const { nickname, fieldsError } = this.state;
    return (
      <>
        <label htmlFor="nickname">
          nickname
          <input
            type="text"
            name="nickname"
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
          />
        </label>
        <div>{fieldsError.nickname && 'insira somente letras sem espaços'}</div>
      </>
    );
  }

  emailField() {
    const { email, fieldsError } = this.state;
    return (
      <>
        <label htmlFor="email">
          email
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <div>{fieldsError.email && 'insira apenas endereços de e-mail do gmail'}</div>
      </>
    );
  }

  passwordField() {
    const { password, fieldsError } = this.state;
    return (
      <>
        <label htmlFor="password">
          senha
          <input type="password" name="password" id="password" value={password} />
        </label>
        <div>
          {fieldsError.password &&
            'a senha deve ter cinco (5) letras maiúsculas, seis (6) símbolos e dois hifens(-)'}
        </div>
      </>
    );
  }

  buttonSubmit() {
    // const { nickname, email, password, fieldsError } = this.state;
    const handleSubmit = () => {
      
    };

    return (
      <button type="button" onClick={() => handleSubmit()}>
        Enviar
      </button>
    );
  }

  render() {
    return (
      <MyForm>
        {this.nicknameField()}
        {this.emailField()}
        {this.passwordField()}
        {this.buttonSubmit()}
      </MyForm>
    );
  }
}

export default Form;
