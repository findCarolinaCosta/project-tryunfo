import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CreateCardList extends Component {
  render() {
    const { cardList, getRemoveBtn } = this.props;
    const createCardList = () => cardList
      .map((card) => (
        <Card
          key={ card.cardName }
          { ...card }
          render
          removeBtn={ getRemoveBtn }
        />));

    return (
      <div>
        { createCardList() }
      </div>
    );
  }
}

CreateCardList.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardList: PropTypes.string.isRequired,
  getRemoveBtn: PropTypes.func.isRequired,

};

export default CreateCardList;
