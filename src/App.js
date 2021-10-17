import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import checkAttributes from './components/CheckAttributes';
import getCreateCardList from './components/CreateCardList';
import getRemoveBtn from './components/RemoveCartFilter';
import onInputChange from './components/GetInputChance';
import onSaveButtonClick from './components/SaveButtonActions';
import formInfo from './stateData';

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
    this.onSaveButtonClick = onSaveButtonClick.bind(this);
  }

  render() {
    const { createCardList } = this;
    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <section>
          <Form { ...this.state } { ...this } />
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
