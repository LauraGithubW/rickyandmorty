import "./Pagination.css";
const Pagination = ({ handlePrev, handleNext, pagination }) => {
  return (
    <div className="botones">
      {pagination >= 1 && (
        <button
          id="scroll1"
          onClick={handlePrev}
          className="btn btn-outline-dark"
        >
          Prev
        </button>
      )}
      <button
        id="scroll2"
        onClick={handleNext}
        className="btn btn-outline-dark "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
