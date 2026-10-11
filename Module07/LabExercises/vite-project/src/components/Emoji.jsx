// ==== Exercise 03 ====
import { useMoodContext } from '../context/MoodContext'

function Emoji() {
  // was: const [isHappy, setIsHappy] = useState(true)
  const { emoji, moodLabel, toggleMood } = useMoodContext()

  return (
    <div className="emoji">
      <p style={{ fontSize: '3rem' }}>
        <span role="img" aria-label={moodLabel}>{emoji}</span>
      </p>
      <button type="button" onClick={toggleMood}>
        Change Mood
      </button>
    </div>
  )
}

export default Emoji

//Module 06 Emoji Code:
// import { useState } from 'react'

// function Emoji() {
//   const [isHappy, setIsHappy] = useState(true)

//   return (
//     <div className="emoji">
//       <p style={{ fontSize: '3rem' }}>{isHappy ? '😀' : '😢'}</p>
//       <button type="button" onClick={() => setIsHappy(!isHappy)}>
//         Change Mood
//       </button>
//     </div>
//   )
// }

// export default Emoji