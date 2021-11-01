import Header from "./components/Header";
import Video from "./assets/video.mp4";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Message from "./components/Message";
import Loader from "./components/Loader";
import "./Episodes.css";
import EpisodesForm from "./components/EpisodesForm";
import { useState, useEffect } from "react";
import Episode from "./components/Episode";
import Musica from "./assets/musica.mp3";

const Episodes = ({ message }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  let urll = `https://rickandmortyapi.com/api/episode/`;
  const [url, setUrl] = useState(urll);
  const [change, setChange] = useState("");
  const [episodeCard, setEpisodeCard] = useState([]);
  const [urlNew, setUrlNew] = useState("");
  const [indice, setIndice] = useState(1);

  const getEpisodes = async (url) => {
    try {
      setLoader(true);
      let res = await fetch(url),
        data = await res.json(),
        info = data.results;

      setEpisodes(info);
      setUrl(urll);

      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (err) {
      setError(true);
    }
    setLoader(false);
  };

  useEffect(() => {
    getEpisodes(urll);
  }, [urll]);

  const handleChange = (e) => {
    let episode = e.target.value;
    let id = episode.slice(0, 1);
    setIndice(id);
    //console.log(id);
    let urlNew = `https://rickandmortyapi.com/api/episode/${id}`;
    setUrlNew(urlNew);
    //console.log(urlNew);
    fetch(urlNew)
      .then((res) => res.json())
      .then((json) => setEpisodeCard(json))

      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header message="Ricky and Morty Episodes" />

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
      <EpisodesForm episodes={episodes} handleChange={handleChange} />
      <Episode episodeCard={episodeCard} episodes={episodes} indice={indice} />

      <div className="container   p-5">
        <div className="row">
          <div className="col"></div>
        </div>

        <div className="container-fluid h-100 ">
          <div className="row w-100">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
