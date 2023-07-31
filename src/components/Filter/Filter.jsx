import PropTypes from 'prop-types';
import {FilterLabel, FilterInput} from './Filter.styled';
import React from 'react';

const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Filter contacts by name:
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;