import ReactDOM from 'react-dom';
import React from 'react';
import FieldText from '@atlaskit/field-text';
import TextProperty from './components/properties/text-property'

ReactDOM.render(
  <div>
    <TextProperty label="Signal name"/>
    <TextProperty/>
  </div>,
  document.getElementById('root')
);