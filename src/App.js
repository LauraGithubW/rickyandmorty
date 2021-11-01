import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import "./App2.css";
import Musica from "./assets/musica.mp3";
import Video from "./assets/video.mp4";
import "./assets/spinning-circles.svg";
import Header from "./components/Header";
import Pagination from "./Pagination";
import Loader from "./components/Loader";
import Message from "./components/Message";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Episodes from "./Episodes";
function App() {
  const [characters, setCharacters] = useState([]);

  const [pagination, setPagination] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  let urll = `https://rickandmortyapi.com/api/character/?page=${pagination}`;
  const [url, setUrl] = useState(urll);

  const getCharacters = async (url) => {
    try {
      setLoader(true);
      let res = await fetch(url),
        data = await res.json(),
        info = data.results;

      setCharacters(info);
      setUrl(urll);

      //console.log(info);
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (err) {
      setError(true);
    }
    setLoader(false);
  };
  useEffect(() => {
    getCharacters(urll);
  }, [urll]);

  const handlePrev = () => {
    setPagination(pagination - 1);
    setUrl(`https://rickandmortyapi.com/api/character/?page=${pagination}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleNext = () => {
    setPagination(pagination + 1);
    setUrl(`https://rickandmortyapi.com/api/character/?page=${pagination}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //console.log(characters);
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <Header message="Ricky an Morty characters" />

          <video src={Video} className="video" autoPlay loop muted />
          <audio src={Musica} className="musica" autoPlay loop />
          <div className="contenedor">
            <NavLink className="links" exact to="/">
              Characters
            </NavLink>
            <NavLink className="links" exact to="/episodes">
              Episodes
            </NavLink>
          </div>
          {loader && <Loader />}
          <main className="container-fluid">
            <div className="container   p-5">
              {!error ? (
                <div className="row">
                  {characters.map((character, index) => (
                    <div className="col">
                      <Characters key={characters.id} characters={character} />
                    </div>
                  ))}
                </div>
              ) : (
                <Message />
              )}

              <div className="container-fluid h-100 ">
                <div className="row w-100">
                  <div className="col-4"></div>
                  <div className="col-4">
                    {!error && (
                      <Pagination
                        pagination={pagination}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                      />
                    )}
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
            </div>
          </main>
        </Route>

        <Route exact path="/episodes" component={Episodes} />
      </BrowserRouter>
    </>
  );
}

export default App;
