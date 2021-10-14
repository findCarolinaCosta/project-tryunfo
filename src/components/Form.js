import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="container" onSubmit={ onSaveButtonClick }>

        <div className="div-infos">
          <label htmlFor="cardName">
            Nome da carta:
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="cardDescription">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="cardAttr1">
            Digite o primeiro atributo da carta:
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="cardAttr2">
            Digite o segundo atributo da carta:
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="cardAttr3">
            Digite o terceiro atributo da carta:
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="cardImage">
            Url da imagem da carta:
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />

          </label>
        </div>

        <div className="div-infos">
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

        <div className="div-infos">
          <label htmlFor="cardTrunfo">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="cardTrunfo"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            É uma carta Super Trunfo? ⭐⭐⭐⭐⭐
          </label>
        </div>

        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>

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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
