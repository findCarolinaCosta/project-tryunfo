import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderDeleteBtn extends Component {
  render() {
    const { cardName, removeBtn } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ removeBtn }
        id={ cardName }
      >
        Excluir
      </button>
    );
  }
}

RenderDeleteBtn.propTypes = {
  cardName: PropTypes.string.isRequired,
  removeBtn: PropTypes.func.isRequired,
};

export default RenderDeleteBtn;
