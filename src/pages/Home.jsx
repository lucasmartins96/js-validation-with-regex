import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  return (
    <Container>
      <Header />
      <span>form</span>
    </Container>
  );
}

export default Home;
