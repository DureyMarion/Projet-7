import PropTypes from 'prop-types'
import { Component } from "react"
import banner from "../../assets/background-banner.png"

import "./Banner.scss";

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { title } = this.props

    return (
      <div className="banner">
        <div className="hero-banner">
          <img src={banner} alt="Un paysage sauvage de bord de mer" />
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
}

Banner.defaultProps = {
  title: "Chez vous, partout et ailleurs",
}

export default Banner;