import PropTypes from 'prop-types'
import { Component } from 'react'
import "./Tag.scss"

class Tag extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

  render() {
    const { tags } = this.props

    return (
      <div className="TagWrapper">
        <p className="TagDescription">
            {tags}
        </p>
      </div>
    )
  }
}

Tag.propTypes = {
  tags: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  tags: '',
}

export default Tag;