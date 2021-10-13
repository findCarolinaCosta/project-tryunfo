import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="container">

        <div className="div-infos">
          <label htmlFor="lettername">
            Nome da carta:
            <input
              data-testid="name-input"
              type="text"
              name="lettername"
              id="lettername"
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
            />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="imgcart">
            Url da imagem da carta:
            <input data-testid="image-input" type="text" name="imgcart" id="imgcart" />
          </label>
        </div>

        <div className="div-infos">
          <label htmlFor="rarityletter">
            Selecione a raridade da carta:
            <select data-testid="rare-input" name="rarityletter" id="rarityletter">
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
            />
            É uma carta Super Trunfo? ⭐⭐⭐⭐⭐
          </label>
        </div>

        <button data-testid="save-button" type="button">Salvar</button>

      </form>
    );
  }
}

export default Form;
