import React, { Component }   from 'react';
import Image                  from './image';

import sanDiego       from '../images/san-diego.jpg';
import sanDiego2      from '../images/san-diego-2.jpg';
import ciara          from '../images/ciara.jpg';
import ciara2         from '../images/ciara-2.jpg';
import kelsey         from '../images/kelsey.jpg';
import kelseyGarret   from '../images/kelsey-garret.jpg';
import thailand       from '../images/thailand.jpg';
import thailand2      from '../images/thailand-2.jpg';

class ImageGrid extends Component {
  render() {
    return (
      <div className='grid'>
        <Image src={sanDiego} />
        <Image src={sanDiego2} />
        <Image src={ciara} />
        <Image src={ciara2} />
        <Image src={kelsey} />
        <Image src={kelseyGarret} />
        <Image src={thailand} />
        <Image src={thailand2} />
      </div>
    );
  }
}

export default ImageGrid;