import { Component } from 'react';

class DadosFormulario extends Component {
  render() {
    return (
      <input
        type={this.props.typeInput}
        placeholder={this.props.placeholderInput}
        className="input-form"
        required
        onChange={this.props.onChange}
      />
    );
  }
}

export default DadosFormulario;
