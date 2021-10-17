export default function getRemoveBtn({ target }) {
  const { id } = target.previousSibling;
  const { cardList } = this.state;
  const newCardList = cardList.filter((card) => card.cardName !== target.id);

  this.setState({
    cardList: [...newCardList],
  });

  if (id === 'trunfo-card') {
    this.setState({
      hasTrunfo: false,
    });
  }
}
