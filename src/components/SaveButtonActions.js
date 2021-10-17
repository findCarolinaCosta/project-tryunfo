import formInfo from '../stateData';

function onSaveButtonClick(event) {
  const { cardList } = this.state;
  event.preventDefault();
  cardList.push({ ...this.state });

  this.setState({
    hasTrunfo: cardList.some((card) => card.cardTrunfo),
  });
  this.setState({ ...formInfo });
}

export default onSaveButtonClick;
