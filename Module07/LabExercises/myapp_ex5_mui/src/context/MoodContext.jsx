import { createContext, useContext, useState } from 'react'

// 1. Create the context
const MoodContext = createContext(null)

// 2. Provide the context: this is your old Emoji state, moved up here
export function MoodProvider({ children }) {
  const [isHappy, setIsHappy] = useState(true)

  const toggleMood = () => setIsHappy(prev => !prev)

  // derived values: calculated from isHappy, so no extra state is needed
  const emoji = isHappy ? '😀' : '😢'
  const moodLabel = isHappy ? 'happy' : 'sad'

  return (
    <MoodContext.Provider value={{ isHappy, emoji, moodLabel, toggleMood }}>
      {children}
    </MoodContext.Provider>
  )
}

// 3. Use the context: custom hook for any component
export function useMoodContext() {
  const context = useContext(MoodContext)
  if (!context) {
    throw new Error('useMoodContext must be used inside a MoodProvider')
  }
  return context
}