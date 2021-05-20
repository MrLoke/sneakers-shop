import styled from 'styled-components/macro'

export const Form = styled.form`
  padding: 2rem;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.secondaryLightBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border: 2px solid #111;
`

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0.7rem 0;
  padding: 1rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.secondaryShade};
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  font-size: ${({ theme }) => theme.size.xs};
  outline: none;
  transition: all 0.2s linear;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryDarkBg};
  }
`

export const ForgotPassword = styled.span`
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.size.xs};
  a {
    color: ${({ theme }) => theme.colors.primaryShade};
    text-decoration: none;
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
  font-size: ${({ theme }) => theme.size.xs};
  transition: all 0.2s linear;
`

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.sizeXS};
  color: ${({ theme }) => theme.errorText};
  text-align: center;
  padding: 1rem 0;
`

export const LinkTo = styled.span`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.size.xs};
  a {
    color: ${({ theme }) => theme.colors.primaryShade};
    text-decoration: none;
    font-weight: 500;
  }
`
