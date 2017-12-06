import _            from 'lodash';
import React,
{ Component }       from 'react';
import { Redirect } from 'react-router-dom';

import ImageGrid from '../components/image-grid';
import albumData from '../components/album-data';

class Album extends Component {
  render() {
    const { params } = this.props.match;
    const album = _.find(albumData, (album) => album.id.toString() === params.id);

    if (!album) {
      return (
        <Redirect to='/' />
      );
    }

    const images = album.images.map(image => { return {source: image}; });

    return (
      <div>
        <ImageGrid images={images} />
      </div>
    );
  }
}

export default Album;