import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-gap: 20px;
  list-style: none;

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 579px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
