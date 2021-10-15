import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputsNameDescription extends Component {
  render() {
    const { cardName, cardDescription, inputChange } = this.props;
    return (
      <section>
        <div className="div-internal">
          <label htmlFor="cardName">
            Nome da carta:
            <input
              className="text"
              data-testid="name-input"
              type="text"
              name="cardName"
              id="cardName"
              placeholder="Digite nome da carta..."
              value={ cardName }
              onChange={ inputChange }
            />
          </label>
        </div>

        <div className="div-internal">
          <label htmlFor="cardDescription">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              onChange={ inputChange }
              rows="10"
              cols="30"
              placeholder="Digite uma descrição da carta..."
            />
          </label>
        </div>
      </section>
    );
  }
}

InputsNameDescription.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default InputsNameDescription;
