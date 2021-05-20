import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from 'features/userSlice'
import { auth } from 'firebase-config'
import {
  Form,
  Input,
  ForgotPassword,
  SubmitBtn,
  ErrorMessage,
  LinkTo,
} from './LoginFormStyled'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = async (value) => {
    try {
      const userAuth = await auth.signInWithEmailAndPassword(
        value.email,
        value.password
      )
      dispatch(
        login({
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          email: userAuth.user.email,
        })
      )
      setLoading(true)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='email'
        id='email'
        name='email'
        placeholder='Email'
        {...register('email')}
      />
      <Input
        type='password'
        id='password'
        name='password'
        placeholder='Password'
        {...register('password')}
      />
      <SubmitBtn type='submit' disabled={loading}>
        Log in
      </SubmitBtn>
      <ForgotPassword>
        <Link to='/#'>Forgot password</Link>
      </ForgotPassword>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <LinkTo>
        Dont have account?&nbsp;<Link to='/signup'>Sign up</Link>
      </LinkTo>
    </Form>
  )
}

export default LoginForm
