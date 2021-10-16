import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import checkAttributes from './components/CheckAttributes';

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
      if (checkAttributes({ ...this.state }) === 'false') {
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
