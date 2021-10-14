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
  isSaveButtonDisabled: true,
  cardList: [],
  hasTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = formInfo;
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

  onSaveButtonClick = (event) => {
    const {
      cardList,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;
    const savedCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    event.preventDefault();
    cardList.push({ savedCard });

    let checkTrunfo = false;
    if (checkTrunfo) {
      this.setState({ ...formInfo, hasTrunfo: true });
    } else if (cardTrunfo) {
      checkTrunfo = true;
      this.setState({ ...formInfo, hasTrunfo: true });
    } else {
      checkTrunfo = false;
      this.setState({ ...formInfo });
    }
  }

  checkboxTrunfo = () => {
    const { hasTrunfo, cardTrunfo } = this.state;
    if (!hasTrunfo) {
      return (
        <div className="div-internal">
          <label htmlFor="cardTrunfo">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="cardTrunfo"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ this.onInputChange }
            />
            É uma carta Super Trunfo? ⭐⭐⭐⭐⭐
          </label>
        </div>);
    }
    return <p className="text">Você já tem um Super Trunfo em seu baralho</p>;
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
        </section>
      </div>
    );
  }
}

export default App;
