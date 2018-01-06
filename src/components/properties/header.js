import Container from './styled/container';
import React from 'react';
import AngleRight from 'react-icons/lib/fa/angle-right';
import HeaderWrapper from './styled/header-wrapper';
import HeaderIcon from './styled/header-icon';

class Header extends React.Component {

  state = {isCollapsed: true};

  onCollapse(e){
    if (this.state.isCollapsed){
      this.setState({ isCollapsed: false });
    }else{
      this.setState({ isCollapsed: true })
    }      
  }

  render() {
    return (
      <div>
        <Container onClick = {(e) => (this.onCollapse(e))}>
          <HeaderIcon>
            <AngleRight/>
          </HeaderIcon>
          <HeaderWrapper>
            {this.props.title}
          </HeaderWrapper>
        </Container>  
        <div>   
          {this.props.children} 
        </div>
      </div>
    );
  }
}

// Export defqult class
export default Header;