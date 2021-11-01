const EpisodesForm = ({ episodes, handleChange }) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Elige un episodio</h3>
      <select
        className="form-select mb-1"
        aria-label=".form-select-lg example "
        style={{ width: "20%" }}
        onChange={handleChange}
      >
        {episodes.map((episode, i) => (
          <option id={episode.id} name={i}>
            {episode.id}-{episode.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default EpisodesForm;
