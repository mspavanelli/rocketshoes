import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import { Container } from './styles'
import api from '../../services/api'
import { formatPrice } from '../../utils/format'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('/products')

      const productsResponse = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }))
      console.table(productsResponse)
      setProducts(productsResponse)
    }
    getProducts()
  }, [])

  return (
    <Container>
      {products.map(product => (
        <ProductCard
          description={product.title}
          image={product.image}
          key={product.id}
          price={product.formattedPrice}
        />
      ))}
    </Container>
  )
}

export default Home
