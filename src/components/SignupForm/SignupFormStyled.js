import styled from 'styled-components/macro'

export const Form = styled.form`
  padding: 2rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryLightBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgb(0 0 0 / 25%);
  z-index: 2;
  position: relative;
  ${({ theme }) => theme.media.sm} {
    border-radius: ${({ theme }) => theme.smallRadius};
    width: 400px;
    max-height: 60vh;
  }
`

export const Header = styled.h2`
  text-decoration: line-through;
  text-transform: uppercase;
  color: #111;
  margin-bottom: 4rem;  
`

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0.7rem 0;
  padding: 1rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.secondaryShade};
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  font-size: ${({ theme }) => theme.size.s};
  outline: none;
  transition: all 0.2s linear;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryDarkBg};
  }
`

export const SubmitBtn = styled.button`
  margin: 1.5rem 0;
  cursor: pointer;
  padding: 1rem 0;
  width: 80%;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.size.s};
  transition: all 0.2s linear;
`

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.sizeXS};
  color: ${({ theme }) => theme.errorText};
  text-align: center;
  padding: 10px 0;
`

export const LinkTo = styled.span`
  display: flex;
  justify-content: center;
  a {
    color: ${({ theme }) => theme.colors.primaryShade};
    text-decoration: none;
    font-weight: 500;
  }
`
