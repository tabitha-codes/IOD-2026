import Emoji from '../components/Emoji'
import { useUserContext } from '../context/UserContext'

function HomePage() {
  const { currentUser } = useUserContext()

  return (
    <div>
      <h1>Home</h1>
      <p>{currentUser.email ? `Welcome back, ${currentUser.email}!` : 'Welcome! Please log in.'}</p>
      <Emoji />
    </div>
  )
}

export default HomePage