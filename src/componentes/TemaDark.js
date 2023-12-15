export const TemaDark = ({ onClick }) => {
  return (
    <div className="theme-container">
      <label id="label-theme-text" htmlFor="input-theme">
        Tema Escuro
      </label>
      <label className="switch">
        <input onClick={onClick} type="checkbox" id="input-theme" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default TemaDark;
