import ReactDOM from 'react-dom';
import React from 'react';
import TextProperty from './components/properties/text-property'
import DropProperty from './components/properties/drop-property'

import {
  DropdownItemGroup,
  DropdownItem,
} from '@atlaskit/dropdown-menu';

ReactDOM.render(
  <div>
    <TextProperty label="Signal name"/>
    <TextProperty/>
    <DropProperty>
      <DropdownItemGroup>
        <DropdownItem> Test 1 </DropdownItem>
        <DropdownItem> Test 2 </DropdownItem>
      </DropdownItemGroup>
    </DropProperty>
  </div>,
  document.getElementById('root')
);