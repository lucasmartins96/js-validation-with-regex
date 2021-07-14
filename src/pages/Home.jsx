import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Header from '../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
}

export default Home;
