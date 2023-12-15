import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Resultado = () => {
  const { state } = useLocation();
  const routerPage = useNavigate();
  const { valoresQuantidadePessoa, mulher, homem, crianca, resultado } = state;
  useEffect(() => {
    if (!state) {
      routerPage('/');
    }
  }, [state, routerPage]);

  const submitRetorno = () => {
    routerPage('/');
  };

  return (
    <div className="calculator">
      <div>
        <div style={{ marginTop: '40px' }} className="result-total-guest">
          <p>Confira a lista para o seu churrasco!</p>
          <p id="total-guest" style={{ marginLeft: '120px' }}>
            Convidados: {valoresQuantidadePessoa}
          </p>
          <p id="total-guest" style={{ marginLeft: '120px' }}></p>
          <span className="guest-list">{homem} homem</span>
          <span className="guest-list">{mulher} mulheres</span>
          <span className="guest-list">{crianca} crianças</span>
        </div>
        <div className="input-group-result">
          <div id="header-result">
            <p>ITEM</p>
            <p>QUANTIDADE</p>
          </div>
          <ul className="results">
            <li>
              <strong>Carne</strong>
              <span>{resultado.carne} kg</span>
            </li>
            <li>
              <strong>Cerveja</strong>
              <span>{resultado.cerveja} Latão</span>
            </li>
            <li>
              <strong>Pão de Alho</strong>
              <span>{resultado.paoDeAlho} unidades</span>
            </li>
            <li>
              <strong>Refrigerante</strong>
              <span>{resultado.refrigerante} garrafa de 2 L</span>
            </li>
            <li>
              <strong>Água</strong>
              <span>{resultado.agua} garrafa de 1 L</span>
            </li>
            <li>
              <strong>Carvão</strong>
              <span>{resultado.carvao} kg</span>
            </li>
            <li>
              <strong>Sal</strong>
              <span>{resultado.sal} kg</span>
            </li>
            <li>
              <strong>Gelo</strong>
              <span>{resultado.gelo} kg</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button onClick={submitRetorno} className="button-retorno">
          Novo cálculo
        </button>
      </div>
    </div>
  );
};

export default Resultado;
