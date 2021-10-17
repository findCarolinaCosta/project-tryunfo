import React from 'react';
import Card from './Card';

function getCreateCardList() {
  const { cardList } = this.state;
  return cardList
    .map((card) => (
      <Card
        render
        { ...card }
        removeBtn={ this.removeBtn }
        key={ card.cardName }
      />));
}

export default getCreateCardList;
