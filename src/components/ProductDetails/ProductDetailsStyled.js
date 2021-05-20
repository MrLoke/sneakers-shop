import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 800px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.secondaryLightBg};
  ${({ theme }) => theme.media.md} {
    flex-direction: row;
  }
`

export const Img = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`

export const ItemName = styled.p`
  margin: 1rem 0;
  font-weight: 500;
`

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  padding: 1rem 4rem;
  width: 100%;
`

export const ChooseSizes = styled.div`
  margin: 1rem 0;
`

export const SelectSizeBtn = styled.button`
  padding: 1.5rem 0;
  font-size: ${({theme})=>theme.size.s};
  color: #fff;
  background-color: #000;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`

export const SizesList = styled.ul`
  list-style: none;
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  background-color: #fff;
  width: 200px;
`

export const SizeItem = styled.li`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`

export const AddCartBtn = styled.button`
  padding: 1.5rem 0;
  font-size: ${({theme})=>theme.size.s};
  margin: 1rem 0;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  color: #fff;
  background-color: ${({theme})=>theme.colors.accent};
`