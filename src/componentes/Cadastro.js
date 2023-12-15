import React, { useState, useEffect } from 'react';
import ButtonsCadastros from './ButtonsCadastros';
import Header from './Header';
import DadosFormulario from './DadosFormulario';

export const Cadastro = () => {
  const [valueChecked, setValueChecked] = useState(false);
  const [CheckedValueName, setChecekedValueName] = useState(false);
  const [CheckedValueEmail, setChecekedValueEmail] = useState(false);
  const [CheckedValuePostalCode, setChecekedValuePostalCode] = useState(false);

  const inputChangeName = (event) => {
    const target = event.target;
    const name = target.value !== '';

    if (name) {
      setChecekedValueName(true);
    }
  };
  const inputChangeEmail = (event) => {
    const target = event.target;
    const email = target.value !== '';
    if (email) {
      setChecekedValueEmail(true);
    }
  };
  const inputChangePostalCode = (event) => {
    const target = event.target;
    const postalCode = target.value !== '';

    if (postalCode) {
      setChecekedValuePostalCode(true);
    }
  };
  useEffect(() => {
    if (CheckedValueName && CheckedValueEmail && CheckedValuePostalCode) {
      setValueChecked(true);
    }
  }, [
    valueChecked,
    CheckedValueName,
    CheckedValueEmail,
    CheckedValuePostalCode,
  ]);

  return (
    <>
      <div className="container">
        <Header checkedText={true} />
        <form>
          <DadosFormulario
            typeInput="text"
            placeholderInput="Digite seu nome"
            onChange={inputChangeName}
          />
          <DadosFormulario
            typeInput="email"
            placeholderInput="Digite seu email"
            onChange={inputChangeEmail}
          />
          <DadosFormulario
            typeInput="email"
            placeholderInput="Digite seu CEP"
            onChange={inputChangePostalCode}
          />
        </form>
        <ButtonsCadastros checked={valueChecked} />
      </div>
    </>
  );
};

export default Cadastro;
