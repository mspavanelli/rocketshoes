import React from 'react'

import ProductCard from '../../components/ProductCard'
import { Container } from './styles'

const Home = () => (
  <Container>
    <ProductCard
      image="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
      price="129,90"
      description="Tênis básico"
    />
    <ProductCard
      image="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
      price="129,90"
      description="Tênis básico com uma descrição tão grande que foi para a segunda linha"
    />
    <ProductCard
      image="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
      price="129,90"
      description="Tênis básico"
    />
  </Container>
)

export default Home
