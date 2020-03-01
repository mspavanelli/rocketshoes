import React from 'react'
import { Container, ProductTable, Total } from './styles'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'

const Cart = () => (
  <Container>
    <ProductTable>
      <thead>
        <tr>
          <th></th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
              alt=""
            />
          </td>
          <td>
            <strong>Tênis</strong>
            <span>R$ 129,00</span>
          </td>
          <td>
            <div>
              <button type="button">
                <MdRemoveCircleOutline size="20" color="#7159c1" />
              </button>
              <input type="number" readOnly />
              <button type="button">
                <MdAddCircleOutline size="20" color="#7159c1" />
              </button>
            </div>
          </td>
          <td>
            <strong>R$ 34,00</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size="20" color="#7159c1" />
            </button>
          </td>
        </tr>
      </tbody>
    </ProductTable>

    <footer>
      <button type="button">Finalizar pedido</button>
      <Total>
        <span>Total</span>
        <strong>R$ 100,00</strong>
      </Total>
    </footer>
  </Container>
)

export default Cart
