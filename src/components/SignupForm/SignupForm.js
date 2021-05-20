import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { auth, db } from 'firebase-config'
import { login } from 'features/userSlice'
import {
  Form,
  Header,
  Input,
  SubmitBtn,
  ErrorMessage,
} from './SignupFormStyled'

const SignupForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (value) => {
    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        value.email,
        value.password
      )

      db.collection('users').doc(userAuth.user.uid).set({
        userId: userAuth.user.uid,
        cart: [],
        displayName: value.username,
        email: value.email,
      })
      
      userAuth.user.updateProfile({
        displayName: value.username,
        email: value.email,
      })

      dispatch(
        login({
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          email: userAuth.user.email,
        })
      )

      history.push('/')
      setLoading(true)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Header>sneakers world</Header>
      <Input
        type='email'
        id='email'
        name='email'
        placeholder='Email'
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <Input
        type='text'
        id='username'
        name='username'
        placeholder='Username'
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username is to short 3 characters minimum',
          },
        })}
      />
      {errors.username && (
        <ErrorMessage>{errors.username.message}</ErrorMessage>
      )}
      <Input
        type='password'
        id='password'
        name='password'
        placeholder='Password'
        {...register('password', {
          required: 'password is required',
          minLength: {
            value: 6,
            message: 'password is to short 6 characters minimum',
          },
        })}
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <Input
        type='password'
        id='password_repeat'
        name='password_repeat'
        placeholder='Confirm password'
        {...register('password_repeat', {
          validate: (value) =>
            value === password.current || 'The passwords do not match',
        })}
      />
      {errors.password_repeat && (
        <ErrorMessage>{errors.password_repeat.message}</ErrorMessage>
      )}
      <SubmitBtn type='submit' disabled={loading}>
        Create account
      </SubmitBtn>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </Form>
  )
}

export default SignupForm
