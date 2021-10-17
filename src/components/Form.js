import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonSubmit from './ButtonSubmit';
import InputsNameDescription from './InputsNameDescription';
import RenderAttributes from './RenderAttributes';
import RenderImage from './RenderImage';
import RenderSelectRarity from './RenderSelectRarity';
import RenderCheckboxTrunfo from './RenderCheckboxTrunfo';

class Form extends Component {
  render() {
    const {
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="container-info" onSubmit={ onSaveButtonClick }>

        <InputsNameDescription { ...this.props } />

        <RenderAttributes { ...this.props } />

        <RenderImage { ...this.props } />

        <RenderSelectRarity { ...this.props } />

        <RenderCheckboxTrunfo { ...this.props } />

        <ButtonSubmit isSaveButtonDisabled={ isSaveButtonDisabled } />

      </form>
    );
  }
}

Form.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
