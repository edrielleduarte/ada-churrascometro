import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const ButtonsCadastros = ({ checked }) => {
  const routerPage = useNavigate();
  const [check, setCheck] = useState(true);

  const notifySuccess = () =>
    toast.success('Cadastro realizado com sucesso!', {
      bodyStyle: {
        fontSize: '20px',
      },
    });

  const notifyInfo = () =>
    toast.info('Por favor, preencher todos os campos em branco', {
      bodyStyle: {
        fontSize: '20px',
      },
    });

  const handleChecked = (e) => {
    setCheck(e.target.checked);
  };
  const submitCadastrar = () => {
    if (checked && check) {
      notifySuccess();
      setTimeout(() => {
        routerPage('/');
      }, 6000);
    } else {
      notifyInfo();
    }
  };

  const submitClicks = () => {
    routerPage('/');
  };

  return (
    <div>
      <ToastContainer theme="dark" />
      <div id="consent-input">
        <input
          type="checkbox"
          id="consent-checkbox"
          name="consentInput"
          checked={check}
          onChange={handleChecked}
        />
        <label htmlFor="consent-checkbox" id="consent-label">
          Concordo em receber comunicações e ofertas personalizadas de acordo
          com meus interesses.
        </label>
      </div>
      <button onClick={submitClicks} className="default-cadastro">
        Voltar
      </button>
      <button
        style={{ margin: '22px' }}
        href="result.html"
        className="default-button"
        onClick={submitCadastrar}
      >
        Cadastrar
      </button>
      <button onClick={submitClicks} className="default-cadastro">
        Pular
      </button>
    </div>
  );
};

export default ButtonsCadastros;
