import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const formInfo = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
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
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <section>
          <Form { ...this.state } onInputChange={ this.onInputChange } />
        </section>
        <section>
          <Card { ...this.state } />
        </section>
      </div>
    );
  }
}

export default App;
