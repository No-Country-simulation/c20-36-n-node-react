import { useCallback, useEffect, useState } from 'react'
import mockData from '../mocks/mockData.json'

export interface User {
  userID: string
  name: string
  lastName: string
  email: string
  urlGitHub: string
  urlLinkedIn: string | null
  biography: string | null
  photo: string
  address: string | null
  birth: string | null
  isAdmin: boolean
}

export const useMockData = () => {
  // Cargar datos de localStorage o usar datos mock
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem('users')
    return storedUsers ? JSON.parse(storedUsers) : (mockData as User[])
  })

  // Guardar datos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const createUser = useCallback((newUser: User) => {
    setUsers(prevUsers => [...prevUsers, newUser])
  }, [])

  const updateUser = useCallback((updatedUser: User) => {
    setUsers(prevUsers => prevUsers.map(user => (user.userID === updatedUser.userID ? updatedUser : user)))
  }, [])

  const deleteUser = useCallback((userID: string) => {
    setUsers(prevUsers => prevUsers.filter(user => user.userID !== userID))
  }, [])

  return {
    users,
    createUser,
    updateUser,
    deleteUser,
  }
}
