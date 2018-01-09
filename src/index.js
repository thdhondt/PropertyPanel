import ReactDOM from 'react-dom';
import React from 'react';
import TextProperty from './components/properties/text-property'
import DropProperty from './components/properties/drop-property'
import GroupProperty from './components/properties/group-property'

const items = [
  {
    heading: 'Cities',
    items: [
      { content: 'Sydney', value: 'city_1' },
      { content: 'Canberra', value: 'city_2' },
      { content: 'Melbourne', value: 'city_3' },
      { content: 'Perth', value: 'city_4', isDisabled: true },
    ],
  },
];


ReactDOM.render(
  <div>
    <GroupProperty title = "Property group">
      <TextProperty label="Signal name"/>
      <TextProperty/>
      <DropProperty items={items} defaultSelected={items[0].items[0]}/>
    </GroupProperty>
    <GroupProperty title="Outter property group">
      <GroupProperty title="Inner group">
        <TextProperty label="Signal name" />
      </GroupProperty>
    </GroupProperty>
  </div>,
  document.getElementById('root')
);