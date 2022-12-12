import React from "react";
import PropTypes from "prop-types";

import Thumb from "../Thumb/index.jsx";
import "./Gallery.scss";

class Gallery extends React.Component {
    render() {
      return (
        <div className="gallery">
          <ul>
            {this.props.map(({ id, cover, title, location }) => (
              <Thumb
                id={id}
                cover={cover}
                title={title}
                location={location}
              />
            ))}
          </ul>
        </div>
      );
    }
  }

Thumb.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    location: PropTypes.string,
}
  
export default Gallery;