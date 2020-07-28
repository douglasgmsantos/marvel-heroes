import React from 'react';

import Header from '../../components/Header';
import Categories from '../../components/Categories';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Categories />
    </Container>
  )
}

export default Dashboard;