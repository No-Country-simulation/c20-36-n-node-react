import { createBrowserRouter } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },

  {
    path: '/login',
    element: <LoginScreen />,
  },

  {
    path: '/register',
    element: <RegisterScreen />,
  },
])
