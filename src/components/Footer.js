import React from 'react'
import PropTypes from 'prop-types'

export default function Footer(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

Footer.defaultProps={title: "Set Footer here"};
Footer.propTypes={title: PropTypes.string};