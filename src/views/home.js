import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

import ImageGrid  from '../components/image-grid';
import albumData  from '../components/album-data';

class Home extends Component {
  goToAlbum(id) {
    this.props.history.push(`/album/${id}`);
  }

  render() {
    const imageList = albumData.map(album => {
      return {
        caption: album.name,
        source: album.images[0],
        onClick: () => this.goToAlbum(album.id)
      };
    });

    return (
      <ImageGrid images={imageList} />
    );
  }
}

export default withRouter(Home);