import ReactDOM from 'react-dom';
import TextProperty from './components/properties/text-property';
import React from 'react';

ReactDOM.render(
  <div>
    <TextProperty/>
    <TextProperty name = 'Test' />
  </div>,
  document.getElementById('root')
);