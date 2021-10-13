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
      <form className="container">

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
          <label htmlFor="descriptionletter">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="descriptionletter"
              id="descriptionletter"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="firstattribute">
            Digite o primeiro atributo da carta:
            <input
              data-testid="attr1-input"
              type="number"
              name="firstattribute"
              id="firstattribute"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="secondattribute">
            Digite o segundo atributo da carta:
            <input
              data-testid="attr2-input"
              type="number"
              name="secondattribute"
              id="secondattribute"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="thirdattribute">
            Digite o terceiro atributo da carta:
            <input
              data-testid="attr3-input"
              type="number"
              name="thirdattribute"
              id="thirdattribute"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="imgcart">
            Url da imagem da carta:
            <input
              data-testid="image-input"
              type="text"
              name="imgcart"
              id="imgcart"
              value={ cardImage }
              onChange={ onInputChange }
            />

          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="rarityletter">
            Selecione a raridade da carta:
            <select
              data-testid="rare-input"
              name="rarityletter"
              id="rarityletter"
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
          <label htmlFor="super">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="super"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            É uma carta Super Trunfo? ⭐⭐⭐⭐⭐
          </label>
        </div>

        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>

      </form>
    );
  }
}

Form.protoTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
