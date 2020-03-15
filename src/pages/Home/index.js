import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '../../components/ProductCard'
import { Container } from './styles'
import api from '../../services/api'
import { formatPrice } from '../../utils/format'

import { fadeInUp, stagger } from '../../animations'

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
    <AnimatePresence>
      <Container initial="initial" animate="animate" exit={{ opacity: 0 }}>
        {products.map(product => (
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.01 }}
          >
            <ProductCard
              description={product.title}
              image={product.image}
              key={product.id}
              price={product.formattedPrice}
            />
          </motion.div>
        ))}
      </Container>
    </AnimatePresence>
  )
}

export default Home
