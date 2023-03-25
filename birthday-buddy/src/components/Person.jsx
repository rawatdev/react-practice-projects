const Person = ({ name, age, image }) => {
  return (
    <div className="person">
      <img
        className="person-img"
        src={image}
        alt={name}
        width="50px"
        height="50px"
      />
      <div className="person-data">
        <h3>{name}</h3>
        <p>{age} years</p>
      </div>
    </div>
  )
}

export default Person
