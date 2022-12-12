import React from 'react';

import './Avatar.scss';

class Avatar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      const { name, picture } = this.props;
  
      return (
        <div className="avatar-container">
            <div className="avatar-name">
                <p>{name}</p>
            </div>
            <div className="avatar-main">
                <img src={picture}></img>
            </div>
        </div>
        
    );
  }
}
  
Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.arrayOf(PropTypes.string),
};

Avatar.defaultProps = {
  name: '',
  picture: undefined,
}
  
export default Avatar;