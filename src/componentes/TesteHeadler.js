import React, { useEffect, useState } from 'react';

const singles = ['vermelho', 'azul', 'verde'];

const TesteHeadler = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    console.log('index', index);
    if (index === 3) {
      setIndex(0);
    }
  }, [index]);
  return (
    <>
      <p>{singles[index]}</p>
      <button onClick={handleNext}>Proximo</button>
    </>
  );
};

export default TesteHeadler;
