import React, { useEffect, useState } from 'react';

const Cards = ({ id, title, onChageValue }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
    onChageValue(contador + 1);
  };

  const diminuir = () => {
    setContador(contador - 1);
    onChageValue(contador - 1);
  };

  useEffect(() => {
    if (contador < 0) {
      setContador(0);
    }
  }, [contador]);

  return (
    <div className="row-first">
      <div className="input-group">
        <label htmlFor={id}>{title}</label>
        <input
          readOnly
          id={id}
          type="number"
          className="input-valid"
          value={contador}
        />
        <div className="button-group">
          <button onClick={diminuir} className="input-group__button--small">
            -
          </button>
          <button onClick={incrementar} className="input-group__button--small">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
