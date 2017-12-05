import React, { Component }   from 'react';
import Measure                from 'react-measure';
import Image                  from './image';

import sanDiego       from '../images/san-diego.jpg';
import sanDiego2      from '../images/san-diego-2.jpg';
import ciara          from '../images/ciara.jpg';
import ciara2         from '../images/ciara-2.jpg';
import kelsey         from '../images/kelsey.jpg';
import kelseyGarret   from '../images/kelsey-garret.jpg';
import thailand       from '../images/thailand.jpg';
import thailand2      from '../images/thailand-2.jpg';

const images = [ sanDiego, sanDiego2, ciara, ciara2,
  kelsey, kelseyGarret, thailand, thailand2 ];

class ImageGrid extends Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  }

  render() {
    const { width, height } = this.state.dimensions;
    let imageSize;

    if (width >= 1000) {
      imageSize = width / 3;
    } else {
      imageSize = width / 2;
    }

    const imageDivs = images.map(image => {
      return (
        <Image
          src={image}
          size={imageSize}
        />
      );
    });

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
        {({ measureRef }) =>
          <div ref={measureRef} className='grid'>
            {imageDivs}
          </div>
        }
      </Measure>
    );
  }
}

export default ImageGrid;