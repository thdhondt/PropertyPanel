import PropTypes from 'prop-types';
import React from 'react';
import Label from './styled/label';

class TextProperty extends React.Component {

  constructor(props) {
    // Call super class constructor
    super(props);

    // Set initial state
    this.state = { value: '' };

    // Set callback
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
        <form>
          <Label for ='test'>
            {this.props.name}
          </Label>
          <input type="text" value={this.state.value} onChange={this.onChange} id = 'text'/>
        </form>
    );
  }
}

// Set property types
TextProperty.propTypes = {
  name: PropTypes.string
};

// Set property default values
TextProperty.defaultProps = {
  name: 'Default'
};

// Export defqult class
export default TextProperty;