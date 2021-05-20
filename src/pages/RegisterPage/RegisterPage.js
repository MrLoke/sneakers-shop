import SignupForm from 'components/SignupForm/SignupForm'
import { selectUser } from 'features/userSlice'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { Wrapper } from './RegisterPageStyled'

const RegisterPage = () => {
  const user = useSelector(selectUser)

  return (
    <Wrapper>
      {!user.isLogged ? (
        <SignupForm />
      ): (
        <Redirect to='/'/>
      )}
    </Wrapper>
  )
}

export default RegisterPage
