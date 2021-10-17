import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderAttributes extends Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, onInputChange } = this.props;
    return (
      <>
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

      </>
    );
  }
}

RenderAttributes.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default RenderAttributes;
