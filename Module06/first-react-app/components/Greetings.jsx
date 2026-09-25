function Greetings({ name = "World", children }) {
  return (
    <div className="Welcome">
      <h3>Hello {name}!</h3>
      {children}
    </div>
  )
}

export default Greetings