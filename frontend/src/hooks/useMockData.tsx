import { useCallback, useEffect, useState } from 'react'

export interface User {
  userID: string
  name: string
  lastName: string
  email: string
  urlGitHub: string
  linkedIn: string
  languages: string[]
  tools: string[]
  projectType: string
  collaborators: string
}

// Recupera la lista de usuarios desde `localStorage`
const getUsersFromLocalStorage = (): User[] => {
  const users = localStorage.getItem('users')
  return users ? JSON.parse(users) : []
}

// Guarda la lista de usuarios en `localStorage`
const saveUsersToLocalStorage = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users))
}

// Guarda el usuario actual en `localStorage`
const saveCurrentUserToLocalStorage = (user: User) => {
  localStorage.setItem('currentUser', JSON.stringify(user))
}

// Recupera el usuario actual desde `localStorage`
const getCurrentUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('currentUser')
  return user ? JSON.parse(user) : null
}

export const useMockData = () => {
  const [users, setUsers] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    // Inicializa los usuarios desde `localStorage`
    setUsers(getUsersFromLocalStorage())
    // Inicializa el usuario actual desde `localStorage`
    setCurrentUser(getCurrentUserFromLocalStorage())
  }, [])

  const createUser = useCallback((newUser: User) => {
    saveCurrentUserToLocalStorage(newUser)
    setCurrentUser(newUser)
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers, newUser]
      saveUsersToLocalStorage(updatedUsers)
      return updatedUsers
    })
  }, [])

  const updateUser = useCallback((updatedUser: User) => {
    console.log('values edit?', updatedUser)
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.map(user => (user.userID === updatedUser.userID ? updatedUser : user))
      saveUsersToLocalStorage(updatedUsers)
      return updatedUsers
    })
  }, [])

  const deleteUser = useCallback((userID: string) => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.userID !== userID)
      saveUsersToLocalStorage(updatedUsers)
      return updatedUsers
    })
  }, [])

  const loginUser = useCallback((user: User) => {
    setCurrentUser(user)
    saveCurrentUserToLocalStorage(user)
  }, [])

  const logoutUser = useCallback(() => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
  }, [])

  return {
    users,
    currentUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser,
  }
}
