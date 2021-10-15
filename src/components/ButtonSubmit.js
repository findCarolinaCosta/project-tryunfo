import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSubmit extends Component {
  render() {
    const {
      isSaveButtonDisabled,
    } = this.props;
    return (
      <button
        data-testid="save-button"
        type="submit"
        disabled={ isSaveButtonDisabled }
      >
        Salvar
      </button>
    );
  }
}

ButtonSubmit.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default ButtonSubmit;
