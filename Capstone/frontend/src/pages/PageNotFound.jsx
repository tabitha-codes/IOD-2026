import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <section className="page">
      <h1>Page Not Found</h1>
      <p>That page doesn't exist. <Link to="/">Go back home</Link>.</p>
    </section>
  )
}

export default PageNotFound
