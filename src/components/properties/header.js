import Container from './styled/container';
import React from 'react';
import AngleRight from 'react-icons/lib/fa/angle-right';
import HeaderWrapper from './styled/header-wrapper';
import HeaderIcon from './styled/header-icon';
import Highlight from './styled/highlight';

class Header extends React.Component {

  state = {isCollapsed: true,
           isHovering: false};

  onCollapse(e){
    if (this.state.isCollapsed){
      this.setState({ isCollapsed: false });
    }else{
      this.setState({ isCollapsed: true })
    }  
    console.log(this.state.isCollapsed)    
  }

  onHover(e){
    this.setState({isHovering: true});
  }

  afterHover(e) {
    this.setState({ isHovering: false });
  }

  render() {
    return (
      <div>
        <Container 
          onClick      = {(e) => (this.onCollapse(e))}
          onMouseEnter = {(e) => (this.onHover(e))}
          onMouseLeave = {(e) => (this.afterHover(e))}
        >
          <Highlight on = {this.state.isHovering}>
            <HeaderIcon up = {this.state.isCollapsed}>
              <AngleRight/>
            </HeaderIcon>
            <HeaderWrapper>
              {this.props.title}
            </HeaderWrapper>
          </Highlight>
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