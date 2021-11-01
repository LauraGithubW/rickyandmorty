import Ricky from "../assets/ricky.jpg";
import "./Header.css";
const Header = ({ message }) => {
  return (
    <header className="container-fluid  bg-primary  p-4">
      <div className="row">
        <div className="col-3">
          <h1>{message}</h1>
        </div>
        <div className="col-9">
          <img src={Ricky} className="logo" alt="Ricky and Morty" />
        </div>
      </div>
    </header>
  );
};

export default Header;
