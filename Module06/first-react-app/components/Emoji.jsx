import { useState } from 'react'

function Emoji() {
  const [isHappy, setIsHappy] = useState(true)

  return (
    <div className="emoji">
      <p style={{ fontSize: '3rem' }}>{isHappy ? '😀' : '😢'}</p>
      <button type="button" onClick={() => setIsHappy(!isHappy)}>
        Change Mood
      </button>
    </div>
  )
}

export default Emoji