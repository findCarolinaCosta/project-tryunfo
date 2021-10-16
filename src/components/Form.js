import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonSubmit from './ButtonSubmit';
import InputsNameDescription from './InputsNameDescription';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
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

        <InputsNameDescription
          cardName={ cardName }
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />

        <div className="div-internal">
          <label htmlFor="cardAttr1">
            Digite o primeiro atributo da carta:
            <input
              className="text"
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-internal">
          <label htmlFor="cardAttr2">
            Digite o segundo atributo da carta:
            <input
              className="text"
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-internal">
          <label htmlFor="cardAttr3">
            Digite o terceiro atributo da carta:
            <input
              className="text"
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-internal">
          <label htmlFor="cardImage">
            Url da imagem da carta:
            <input
              className="text"
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />

          </label>
        </div>

        <div className="div-internal">
          <label htmlFor="cardRare">
            Selecione a raridade da carta:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>

        { checkboxTrunfo() }

        <ButtonSubmit isSaveButtonDisabled={ isSaveButtonDisabled } />

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
