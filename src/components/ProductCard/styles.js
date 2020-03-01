import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  img {
    align-self: center;
    width: 100%;
  }

  > strong {
    color: #333;
    font-size: 16px;
    line-height: 20px;
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    align-items: center;
    border: 0;
    border-radius: 4px;
    background-color: #7159c1;
    color: #fff;
    display: flex;
    margin-top: auto;
    overflow: hidden;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }

    div {
      align-items: center;
      background: rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 12px;

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
    }
  }
`
