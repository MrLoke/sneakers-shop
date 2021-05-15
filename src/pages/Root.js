import Routes from 'routes/Routes'
import { Helmet } from 'react-helmet'
import { theme } from 'theme/theme'
import GlobalStyle from 'theme/GlobalStyles'
import { login, logout } from 'features/userSlice'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import { useDispatch } from 'react-redux'
import { auth, db } from 'firebase-config'
import { useEffect } from 'react'
import { setShopItems } from 'features/shopSlice'

const Root = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            email: userAuth.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })
     const unmount = db
       .collection('shop')
       .doc('main-products')
       .collection('items')
       .onSnapshot((snapshot) => {
         const tempShopItems = []
         snapshot.forEach((doc) => {
           tempShopItems.push({ ...doc.data(), id: doc.id })
         })
         dispatch(setShopItems(tempShopItems))
       })
     return unmount
  }, [dispatch])

  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}

export default Root
