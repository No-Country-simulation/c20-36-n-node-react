import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/organisms/layouts/MainLayout'
import { ProfileEditForm } from '../forms/ProfileEditForm'
import { Dashboard } from '../screens/Dashborad/Dashboard'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/login', element: <LoginScreen /> },
      { path: '/register', element: <RegisterScreen /> },
      // { path: '/dashboard', element: <Dashboard /> },
      { path: '/dashboard/profile', element: <Dashboard /> },
      { path: '/dashboard/profile', element: <ProfileEditForm /> },
    ],
  },
])
