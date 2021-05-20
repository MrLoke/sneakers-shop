import styled from 'styled-components/macro'

export const MenuWrapper = styled.div`
  display: flex;
  position: relative;
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ShopCartQuantity = styled.p`
  padding-bottom: 2rem;
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  margin-bottom: 3rem;
  overflow-y: scroll;
`

export const CartProduct = styled.div`
  width: 170px;
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  &:last-child {
    border-bottom: none;
  }
`

export const Img = styled.img`
  width: 170px;
  height: 130px;
`

export const CartProductInfo = styled.p`
  padding: 0.3rem 0;
  font-size: ${({ theme }) => theme.size.xs};
`

export const QuantityProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const QuantityBtn = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const OrderBtn = styled.button`
  padding: 1.3rem 3rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.utils.mediumRadius};
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: ${({ theme }) => theme.size.s};
  font-family: 'Roboto', sans-serif;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.lightText};
  }
`
