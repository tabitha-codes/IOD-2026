// shows a rating like ★★★★☆
function Stars({ rating }) {
  const rounded = Math.round(rating)
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rounded)}{'☆'.repeat(5 - rounded)}
    </span>
  )
}

export default Stars
