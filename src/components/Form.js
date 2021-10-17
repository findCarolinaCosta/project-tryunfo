import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonSubmit from './ButtonSubmit';
import InputsNameDescription from './InputsNameDescription';
import RenderAttributes from './RenderAttributes';
import RenderImage from './RenderImage';
import RenderSelectRarity from './RenderSelectRarity';

class Form extends Component {
  render() {
    const {
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
      cardTrunfo,
    } = this.props;

    const checkboxTrunfo = () => {
      if (!hasTrunfo) {
        return (
          <div className="div-internal">
            <label htmlFor="cardTrunfo">
              <input
                data-testid="trunfo-input"
                type="checkbox"
                id="trunfo-card"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              É uma carta Super Trunfo? ⭐⭐⭐⭐⭐
            </label>
          </div>);
      }
      return <p className="text">Você já tem um Super Trunfo em seu baralho</p>;
    };

    return (
      <form className="container-info" onSubmit={ onSaveButtonClick }>

        <InputsNameDescription { ...this.props } />

        <RenderAttributes { ...this.props } />

        <RenderImage { ...this.props } />

        <RenderSelectRarity { ...this.props } />

        { checkboxTrunfo() }

        <ButtonSubmit isSaveButtonDisabled={ isSaveButtonDisabled } />

      </form>
    );
  }
}

Form.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
