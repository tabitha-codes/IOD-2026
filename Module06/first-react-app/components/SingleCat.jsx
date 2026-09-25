// ==============Exercise 05==============
function SingleCat({ id, name, latinName, image, onDelete }) {
  return (
    <li className="SingleCat">
      <img src={image} alt={name} width="150" />
      <h3>{name}</h3>
      <span><em>{latinName}</em></span>
      <div>
        <a href="#" onClick={(e) => { e.preventDefault(); onDelete(id) }}>
          Delete
        </a>
      </div>
    </li>
  )
}

export default SingleCat

// ==============Exercise 02==============
// function SingleCat({ cat }) {
//   return (
//     <li className="single-cat">
//       <img src={cat.image} alt={cat.name} width="150" />
//       <h3>{cat.name}</h3>
//       <p><em>{cat.latinName}</em></p>
//     </li>
//   )
// }

// export default SingleCat