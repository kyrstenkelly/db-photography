import React, { Component } from 'react';
import Measure              from 'react-measure';

class Image extends Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    },
    hovering: false
  }

  handleHover(hover) {
    this.setState({hovering: hover});
  }

  render() {
    const { width, height } = this.state.dimensions;
    const { hovering } = this.state;

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
        {({ measureRef }) =>
          <div
            ref={measureRef}
            className='grid-image'
            style={{
              backgroundImage: `url(${this.props.src})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              height: width
            }}
            onMouseOver={() => this.handleHover(true)}
            onMouseLeave={() => this.handleHover(false)}
          >
            <div
              className='grid-image--overlay'
              style={{
                height: width,
                width: width
              }}
            >
              { hovering &&
                <div>Damn, what a great photo</div>
              }
            </div>
          </div>
        }
      </Measure>
    );
  }
}

export default Image;