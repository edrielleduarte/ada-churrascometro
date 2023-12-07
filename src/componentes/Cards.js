const Cards = ({ title }) => {
  return (
    <div className="row-first">
      <div className="input-group">
        <label htmlFor="homem">{title}</label>
        <input
          type="number"
          id="men"
          className="input-valid"
          defaultValue={0}
        />
        <div className="button-group">
          <button className="input-group__button--small">-</button>
          <button className="input-group__button--small">+</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
