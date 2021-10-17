import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderImage extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
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
    );
  }
}

RenderImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default RenderImage;
