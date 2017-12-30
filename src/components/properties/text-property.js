import PropTypes from 'prop-types';
import React from 'react';
import Label from './styled/label';
import FieldText from '@atlaskit/field-text';
import Container from './styled/container';

class TextProperty extends React.Component {

  handleOnChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  }

  render() {
    return (
      <Container>
        <Label>
          {this.props.label}
        </Label>
        <FieldText {...this.props} isLabelHidden/>
      </Container>
    );
  }
}

// Set property types
TextProperty.propTypes = {
  label: PropTypes.string
};

// Set property default values
TextProperty.defaultProps = {
  label: 'Default',
};

// Export defqult class
export default TextProperty;