import React, { useEffect, useState } from 'react';
import Header from './Header';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';
import TemaDark from './TemaDark';

export const BodyPage = () => {
  const routerPage = useNavigate();
  const [mensagem, setMensagem] = useState(false);
  const [mulher, setMulher] = useState(0);
  const [homem, setHomem] = useState(0);
  const [crianca, setCrianca] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const valoresQuantidadePessoa = mulher + homem + crianca;
  const valoresAdultosCerveja = mulher + homem;

  const calculadoraChurrasco = () => {
    const carne = valoresQuantidadePessoa * 0.4;
    const cerveja = valoresAdultosCerveja * 6;
    const paoDeAlho = valoresQuantidadePessoa * 1;
    const refrigerante = valoresQuantidadePessoa * 1;
    const agua = valoresQuantidadePessoa * 1;
    const carvao = valoresQuantidadePessoa * 0.5;
    const sal = valoresQuantidadePessoa * 0.05;
    const gelo = valoresQuantidadePessoa * 0.5;

    return {
      carne: carne.toFixed(1),
      cerveja: cerveja.toFixed(0),
      paoDeAlho: paoDeAlho.toFixed(0),
      refrigerante: refrigerante,
      agua: agua,
      carvao: carvao.toFixed(1),
      sal: sal.toFixed(3),
      gelo: gelo.toFixed(1),
    };
  };

  const calcularChurarras = () => {
    if (valoresQuantidadePessoa === 0) {
      setMensagem(true);
    } else {
      setMensagem(false);
      const resultado = calculadoraChurrasco();
      routerPage('/resultado', {
        state: { valoresQuantidadePessoa, mulher, homem, crianca, resultado },
      });
    }
  };

  useEffect(() => {
    if (mensagem) {
      setTimeout(() => {
        setMensagem(false);
      }, 8000);
    }
  }, [mensagem]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const submitCadastro = () => {
    routerPage('/cadastro');
  };

  return (
    <>
      <div className={isDarkMode ? 'dark ' : 'container'}>
        <div className="calculator">
          <Header
            titlePrincipal="Churrascômetro"
            subtitle="Precisa de uma ajudinha com o churrasco? :)"
            subTitlePs="Quantas pessoas vão participar?"
          />
          <div className="container-fluid ">
            <Cards id="homen" title="Homens" onChageValue={setHomem} />
            <Cards id="mulheres" title="Mulheres" onChageValue={setMulher} />
            <Cards id="crianças" title="Crianças" onChageValue={setCrianca} />
          </div>
          {mensagem && (
            <p className="title-mensagem">
              Por favor, selecione a quantidade de pessoas!
            </p>
          )}
          <div>
            <button
              onClick={calcularChurarras}
              style={{ marginRight: '40px' }}
              className="button-retorno"
            >
              Calcular
            </button>
            <button className="button-retorno" onClick={submitCadastro}>
              Formulário
            </button>
          </div>
        </div>
      </div>
      <TemaDark onClick={toggleDarkMode} />
    </>
  );
};

export default BodyPage;
