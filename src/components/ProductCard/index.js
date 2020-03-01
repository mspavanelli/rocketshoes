import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

import PropTypes from 'prop-types'

import { Container } from './styles'

const ProductCard = ({ description, image, price }) => (
  <Container>
    <img src={image} alt="" />
    <strong>{description}</strong>
    <span>{price}</span>
    <button type="button">
      <div>
        <MdShoppingCart />0
      </div>
      <span>Adicionar ao carrinho</span>
    </button>
  </Container>
)

ProductCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default ProductCard
