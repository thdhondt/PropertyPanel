import PropTypes from 'prop-types';
import React from 'react';
import Label from './styled/label';
import FieldText from '@atlaskit/field-text';
import Container from './styled/container';
import WidthWrapper from './styled/width-wrapper';

class TextProperty extends React.Component {
  render() {
    return (
      <Container>
        <Label>
          {this.props.label}
        </Label>
        <WidthWrapper>
          <FieldText 
            {...this.props} 
            isLabelHidden
            shouldFitContainer/>
        </WidthWrapper>
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