import PropTypes from 'prop-types';

export const Header = ({ titlePrincipal, subtitle, subTitlePs }) => {
  return (
    <>
      <h1 className="style-h3">{titlePrincipal}</h1>
      <h3>{subtitle}</h3>
      <h3 className="configSegH3">{subTitlePs}</h3>
    </>
  );
};

Header.propTypes = {
  titlePrincipal: PropTypes.string,
  subtitle: PropTypes.string,
  subTitlePs: PropTypes.string,
};

export default Header;
