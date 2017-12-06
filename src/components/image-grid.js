import React, { Component }   from 'react';
import Measure                from 'react-measure';
import Image                  from './image';

import albums                from './album-data';

class ImageGrid extends Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  }

  render() {
    const { width, height } = this.state.dimensions;
    const { images } = this.props;
    let imageSize;

    if (width >= 1000) {
      imageSize = width / 3;
    } else {
      imageSize = width / 2;
    }

    const imageDivs = images.map(image => {
      return (
        <Image
          key={image.source}
          caption={image.caption}
          src={image.source}
          size={imageSize}
          onClick={image.onClick}
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