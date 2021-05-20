import styled from 'styled-components/macro'

export const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const ItemImg = styled.img`
  cursor: pointer;
  width: 245px;
  height: 180px;
`

export const AddToCartBtn = styled.button`
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.size.xs};
  margin: 1rem 0;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.accent};
`

export const ProductInfo = styled.p`
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.size.xs};
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
`
