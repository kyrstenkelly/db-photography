import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import ImageGrid from './components/image-grid';

class App extends Component {
  render() {
    return (
      <StickyContainer>
        <Sticky>
          {
            ({style}) => {
              return (
                <header className="app-header" style={style}>
                  <div className="app-menu">Contact</div>
                  <div className="app-title">DB Photography</div>
                </header>
              )
            }
          }
        </Sticky>

        <div>
          {this.props.children}
        </div>
      </StickyContainer>
    );
  }
}

export default App;
