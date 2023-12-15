import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Header = ({
  titlePrincipal,
  subtitle,
  subTitlePs,
  checkedText,
}) => {
  useEffect(() => {});
  return (
    <>
      <h1>{titlePrincipal}</h1>
      {!checkedText && (
        <>
          <h3>{subtitle}</h3>
          <h3 className="configSegH3">{subTitlePs}</h3>
        </>
      )}
      {checkedText && (
        <p id="header-form">
          Fique por dentro de todas as novidades. Cadastre seu e-mail e receba
          promoções especiais!
        </p>
      )}
    </>
  );
};

Header.propTypes = {
  titlePrincipal: PropTypes.string,
  subtitle: PropTypes.string,
  subTitlePs: PropTypes.string,
};

export default Header;
