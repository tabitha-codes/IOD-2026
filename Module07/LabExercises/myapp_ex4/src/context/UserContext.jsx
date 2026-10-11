import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({})

  const handleUpdateUser = (user) => setCurrentUser(user)

  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used inside a UserProvider')
  }
  return context
}