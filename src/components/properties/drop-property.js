import PropTypes from 'prop-types';
import React from 'react';
import Label from './styled/label';
import Container from './styled/container';
import DropdownMenu from '@atlaskit/dropdown-menu';

class DropProperty extends React.Component {

  constructor(props){
    super(props);
    this.onItemSelected = this.onItemSelected.bind(this);
  }
  onItemSelected(item){
    console.log('test');
  }

  render() {
    return (
      <Container>
        <Label>
          {this.props.label}
        </Label>
        <DropdownMenu
          trigger="Test"
          triggerType="button"
          shouldFlip={false}
          shouldFitContainer={true}
          onItemActivated={ (item) => (this.onItemSelected(item)) }>
          {this.props.children}
        </DropdownMenu>
      </Container>
    );
  }
}

// Set property types
DropProperty.propTypes = {
  label: PropTypes.string
};

// Set property default values
DropProperty.defaultProps = {
  label: 'Default',
};

// Export defqult class
export default DropProperty;