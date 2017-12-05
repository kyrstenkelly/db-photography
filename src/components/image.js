import React, { Component } from 'react';

import sanDiego from '../images/san-diego.jpg';

class Image extends Component {
  render() {
    return (
      <img
        className='image'
        src={sanDiego}
      />
    );
  }
}

export default Image;