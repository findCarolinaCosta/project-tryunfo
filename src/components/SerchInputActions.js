import React from 'react';
import Card from './Card';

function RenderReferringSearch() {
  // const { filterSearch, cardList, removeBtn } = this.state;
  return cardList.length >= 1 ? cardList
    .filter((card) => card.cardName.includes(filterSearch)).map((card) => (<Card
      render
      { ...card }
      removeBtn={ removeBtn }
      key={ card.cardName }
    />)) : <p>Lista vazia</p>;
}

filterSearch
  .map((item) => {
    if (item === cardList.cardName) {
      return (<Card
        render
        { ...item }
        removeBtn={ this.removeBtn }
        key={ item.cardName }
      />);
    }
    return console.log('Nenhum item encontrado');
  });

export default RenderReferringSearch;
