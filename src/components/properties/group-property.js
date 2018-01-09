import Container from './styled/container';
import React from 'react';
import AngleRight from 'react-icons/lib/fa/angle-right';
import HeaderWrapper from './styled/header-wrapper';
import HeaderIcon from './styled/header-icon';
import Highlight from './styled/highlight';
import Collapse from './styled/collapse';
import Indent from './styled/indent';

class GroupProperty extends React.Component {

  state = {isCollapsed: false,
           isHovering: false,
           height: '100%'};

  onCollapse(e){
    if (this.state.isCollapsed){
      this.setState({ isCollapsed: false,
                      height: '100%'});
    }else{
      this.setState({ isCollapsed: true,
                      height: '0px'})
    }     
  }

  onHover(e){
    this.setState({isHovering: true});
  }

  afterHover(e) {
    this.setState({ isHovering: false });
  }

  render() {
    return (
      // Indented pannel
      <Indent>
        {/*Mouse actions on the header*/}
        <Container 
          onClick      = {(e) => (this.onCollapse(e))}
          onMouseEnter = {(e) => (this.onHover(e))}
          onMouseLeave = {(e) => (this.afterHover(e))}>
          {/*Header highlight*/}
          <Highlight on = {this.state.isHovering}>
            {/*Arrow on the left*/}
            <HeaderIcon up = {this.state.isCollapsed}>
              <AngleRight/>
            </HeaderIcon>
            {/*Title*/}
            <HeaderWrapper>
              {this.props.title}
            </HeaderWrapper>
          </Highlight>
        </Container>  

        {/*Collapsible content*/}
        <Collapse height = {this.state.height}>   
          {this.props.children} 
        </Collapse>
      </Indent>
    );
  }
}



// Export defqult class
export default GroupProperty;