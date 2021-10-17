import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  render() {
    const { onInputChance, filterSearch, RenderReferringSearch } = this.props;
    return (
      <div>
        <label htmlFor="name-filter">
          <p>Filtro de Busca</p>
          <input
            id="name-filter"
            name="name-filter"
            type="text"
            data-testid="name-filter"
            placeholder="Nome da carta"
            onInputChance={ onInputChance }
            value={ filterSearch }
          />
        </label>
        <button
          type="button"
          onClick={ RenderReferringSearch() }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onInputChance: PropTypes.func.isRequired,
  filterSearch: PropTypes.string.isRequired,
  RenderReferringSearch: PropTypes.string.isRequired,
};

export default SearchInput;
