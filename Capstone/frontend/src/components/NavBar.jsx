import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">Lease Lens</Link>
      <nav aria-label="Main navigation">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/apartments">Apartments</NavLink></li>
          <li><NavLink to="/write-review">Write a Review</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
