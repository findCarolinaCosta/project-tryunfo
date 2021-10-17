function onInputChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  }, () => this.checkAttributes());
}

export default onInputChange;
