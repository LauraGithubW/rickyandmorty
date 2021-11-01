import "./Episode.css";

const Episode = ({ episodeCard, episodes, indice }) => {
  console.log(episodeCard);
  console.log(episodes);
  console.log(indice);
  let youtubeVideo = `https://www.youtube.com/results?search_query=${episodeCard.name}`;
  console.log(youtubeVideo);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="card m-5 bg-primary  text-center  block-center p-2 "
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "20%",
        }}
      >
        <img src="" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            <b>Nombre del episodio: </b>
            <span className="text-light">{episodeCard.name}</span>
          </h5>
          <h5 className="card-title">
            <b>Fecha de estreno: </b>
            <span className="text-light">{episodeCard.air_date}</span>
          </h5>
          <a href={youtubeVideo} target="_blank" className="link">
            Ver trailer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Episode;
