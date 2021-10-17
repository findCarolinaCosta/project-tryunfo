function checkAttributes() {
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
    return this.setState({ isSaveButtonDisabled: false });
  }
  return this.setState({ isSaveButtonDisabled: true });
}

export default checkAttributes;
