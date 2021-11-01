import "./Characters.css";
const Characters = ({ characters }) => {
  //console.log(characters.name);
  return (
    <div className="card m-2 bg-primary p-2" style={{ width: " 16rem" }}>
      <img
        src={characters.image}
        className="card-img-top"
        alt={characters.name}
      />
      <div className="card-body">
        <h5 className="card-title">{characters.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-secondary text-white">
          Specie: {characters.species}
        </li>
        <li className="list-group-item bg-secondary text-white">
          Status: {characters.status}
        </li>
        <li className="list-group-item bg-secondary text-white">
          Gender: {characters.gender}
        </li>
      </ul>
    </div>
  );
};

export default Characters;
