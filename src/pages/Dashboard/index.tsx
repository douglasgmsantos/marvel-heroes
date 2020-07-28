import React from 'react';

import Header from '../../components/Header';
import Categories from '../../components/Categories';
import Characters from '../../components/Characters';


import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Categories />
      <Characters />
    </Container>
  )
}

export default Dashboard;