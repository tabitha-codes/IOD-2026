import { UserProvider } from './context/UserContext'
import { MoodProvider } from './context/MoodContext'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    <UserProvider>
      <MoodProvider>
        <NavBar />          {/* above the routes, so it shows on every page */}
        <main>
          <AppRoutes />     {/* swaps in the page that matches the URL */}
        </main>
      </MoodProvider>
    </UserProvider>
  )
}

export default App