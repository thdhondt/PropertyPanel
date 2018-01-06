import PropTypes from 'prop-types';
import React from 'react';
import Label from './styled/label';
import Container from './styled/container';
import SingleSelect from '@atlaskit/single-select';

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
        <SingleSelect
          shouldFlip={false}
          shouldFitContainer={true}
          items = {this.props.items}
          defaultSelected = {this.props.defaultSelected}
        />
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