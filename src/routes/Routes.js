import { lazy, Suspense } from 'react'
import Navbar from 'components/Navbar/Navbar'
import MobileMenu from 'components/MobileMenu/MobileMenu'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserCart from 'components/UserCart/UserCart'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const ProductPage = lazy(() => import('pages/ProductPage/ProductPage'))
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Navbar />
        <MobileMenu />
        <UserCart />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/product/:name' component={ProductPage} />
          <Route exact path='/signup' component={RegisterPage} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
