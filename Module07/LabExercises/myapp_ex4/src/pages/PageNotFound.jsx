import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>That page doesn't exist. <Link to="/">Go back home</Link>.</p>
    </div>
  )
}

export default PageNotFound