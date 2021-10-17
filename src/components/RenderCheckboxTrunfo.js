import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderCheckboxTrunfo extends Component {
  render() {
    const { hasTrunfo, cardTrunfo, onInputChange } = this.props;
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
      <div>
        { checkboxTrunfo() }
      </div>
    );
  }
}

RenderCheckboxTrunfo.propTypes = {
  hasTrunfo: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default RenderCheckboxTrunfo;
