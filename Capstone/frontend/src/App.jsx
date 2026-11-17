import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App
