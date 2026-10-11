import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="NavBar" aria-label="Main navigation">
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/bitcoin">Bitcoin Rates</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar