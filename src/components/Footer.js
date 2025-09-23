import React from 'react'
import PropTypes from 'prop-types'

export default function Footer(props) {
  return (
    <div class='footer'>
      <p className='text-center'>Copyright My TodoList.com</p>
    </div>
  )
}

Footer.defaultProps={title: "Set Footer here"};
Footer.propTypes={title: PropTypes.string};