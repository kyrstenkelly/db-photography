import React, { Component } from 'react';
import Measure              from 'react-measure';

class Image extends Component {
  state = {
    hovering: false
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  handleHover(hover) {
    this.setState({hovering: hover});
  }

  render() {
    const { hovering } = this.state;
    const { caption, size, src } = this.props;

    return (
      <div
        className='grid-image'
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          width: size,
          height: size
        }}
        onClick={() => this.handleClick()}
        onMouseOver={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        { caption &&
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
        }
      </div>
    );
  }
}

export default Image;