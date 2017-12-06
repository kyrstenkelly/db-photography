import React, { Component } from 'react';
import Measure              from 'react-measure';

class Image extends Component {
  state = {
    hovering: false
  }

  handleHover(hover) {
    this.setState({hovering: hover});
  }

  render() {
    const { hovering } = this.state;
    const { caption, size } = this.props;

    return (
      <div
        className='grid-image'
        style={{
          backgroundImage: `url(${this.props.src})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          width: size,
          height: size
        }}
        onMouseOver={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        <div
          className='grid-image--overlay'
          style={{
            height: size,
            width: size
          }}
        >
          { hovering &&
            <div>{caption}</div>
          }
        </div>
      </div>
    );
  }
}

export default Image;