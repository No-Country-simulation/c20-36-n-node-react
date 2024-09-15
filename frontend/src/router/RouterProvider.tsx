import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/organisms/layouts/MainLayout'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import { Profile } from '../screens/Profile/Profile'
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/login', element: <LoginScreen /> },
      { path: '/register', element: <RegisterScreen /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
])
