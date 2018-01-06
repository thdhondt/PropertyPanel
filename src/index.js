import ReactDOM from 'react-dom';
import React from 'react';
import TextProperty from './components/properties/text-property'
import DropProperty from './components/properties/drop-property'
import Header from './components/properties/header'

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
  <Header title = "Property group">
    <TextProperty label="Signal name"/>
    <TextProperty/>
    <DropProperty items={items} defaultSelected={items[0].items[0]}/>
  </Header>,
  document.getElementById('root')
);