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