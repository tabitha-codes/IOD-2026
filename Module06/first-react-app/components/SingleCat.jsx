function SingleCat({ cat }) {
  return (
    <li className="single-cat">
      <img src={cat.image} alt={cat.name} width="150" />
      <h3>{cat.name}</h3>
      <p><em>{cat.latinName}</em></p>
    </li>
  )
}

export default SingleCat