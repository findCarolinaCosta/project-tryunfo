import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const formInfo = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'Normal',
  cardTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...formInfo,
      hasTrunfo: false,
      cardList: [],
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription, cardImage, cardRare,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const limitPerAttribute = 90;
      const sumMax = 210;
      const sumFinalAtributes = (Number(cardAttr1)
        + Number(cardAttr2)
        + Number(cardAttr3)) <= sumMax;
      const sumAtribues = Number(cardAttr1) >= 0
        && Number(cardAttr2) >= 0
        && Number(cardAttr3) >= 0;
      const checkingLimitPerAttribute = Number(cardAttr1) <= limitPerAttribute
        && Number(cardAttr2) <= limitPerAttribute
        && Number(cardAttr3) <= limitPerAttribute;
      if (cardName
        && cardDescription
        && cardImage
        && cardRare
        && sumAtribues
        && checkingLimitPerAttribute
        && sumFinalAtributes) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  createCardList = () => {
    const { cardList } = this.state;
    return cardList
      .map((card) => (
        <Card
          key={ card.cardName }
          { ...card }
          render
          removeBtn={ this.getRemoveBtn }
        />));
  }

  getRemoveBtn = ({ target }) => {
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

  onSaveButtonClick = (event) => {
    const { cardList } = this.state;
    event.preventDefault();
    cardList.push({ ...this.state });

    this.setState({
      hasTrunfo: cardList.some((card) => card.cardTrunfo),
    });
    this.setState({ ...formInfo });
  }

  render() {
    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <section>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            checkboxTrunfo={ this.checkboxTrunfo }
            onSubmit={ this.onSaveButtonClick }
          />
        </section>
        <section>
          <Card { ...this.state } />
          { this.createCardList() }
        </section>
      </div>
    );
  }
}

export default App;
