import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderSelectRarity extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
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
    );
  }
}

RenderSelectRarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default RenderSelectRarity;
