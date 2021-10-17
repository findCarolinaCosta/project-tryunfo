import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import checkAttributes from './components/CheckAttributes';
import getCreateCardList from './components/CreateCardList';
import getRemoveBtn from './components/RemoveCartFilter';
import onInputChange from './components/GetInputChance';

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
    this.removeBtn = getRemoveBtn.bind(this);
    this.createCardList = getCreateCardList.bind(this);
    this.onInputChange = onInputChange.bind(this);
    this.checkAttributes = checkAttributes.bind(this);
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
    const { createCardList } = this;
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

          { createCardList() }
        </section>
      </div>
    );
  }
}

export default App;
