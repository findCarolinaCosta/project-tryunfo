import React from 'react';
import Form from './components/Form';

const formInfo = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'Selecione',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

const onInputChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  });
};

class App extends React.Component {
  constructor() {
    super();
    this.state = formInfo;
  }

  render() {
    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ onInputChange } />
      </div>
    );
  }
}

export default App;
