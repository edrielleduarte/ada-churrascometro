export const DadosFormulario = ({ typeInput, placeholderInput, onChange }) => {
  return (
    <input
      type={typeInput}
      id="name"
      placeholder={placeholderInput}
      className="input-form"
      required
      onChange={onChange}
    />
  );
};

export default DadosFormulario;
