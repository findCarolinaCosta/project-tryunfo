import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderDeleteBtn from './RenderDeleteBtn';

class Card extends Component {
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
      render,
    } = this.props;

    const checkCardTrunfo = () => {
      if (cardTrunfo) {
        return (
          <h4
            id="trunfo-card"
            data-testid="trunfo-card"
          >
            Super Trunfo
          </h4>
        );
      }
    };

    return (
      <div className="card" id={ cardTrunfo ? 'trunfo-card' : { cardName } }>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" width="150" />
        <p data-testid="description-card">{cardDescription}</p>
        <h3 data-testid="attr1-card">{cardAttr1}</h3>
        <h3 data-testid="attr2-card">{cardAttr2}</h3>
        <h3 data-testid="attr3-card">{cardAttr3}</h3>
        <h4 data-testid="rare-card">{cardRare}</h4>
        { checkCardTrunfo() }
        {render && <RenderDeleteBtn { ...this.props } />}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  removeBtn: PropTypes.func.isRequired,
  render: PropTypes.bool.isRequired,
};

export default Card;
