import Cargando from "../assets/spinning-circles.svg";
const Loader = () => {
  return (
    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
      <img src={Cargando} alt="Loading" />
    </div>
  );
};

export default Loader;
