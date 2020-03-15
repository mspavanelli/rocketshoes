import styled from 'styled-components'
import { darken } from 'polished'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    button {
      background-color: #7159c1;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: 600;
      padding: 12px 20px;
      text-transform: uppercase;
      transition: opacity 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }
    }
  }
`

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    border-bottom: 1px solid #eee;
    padding: 12px;
  }

  img {
    width: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
  }

  div {
    align-items: center;
    display: flex;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
    outline: 0;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`
