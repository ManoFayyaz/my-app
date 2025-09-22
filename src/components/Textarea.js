import React from "react";
import PropTypes from 'prop-types';

export default function Textarea(props) {
  return (
   <div class="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">{props.message}</label>
    </div>
  )
}

//change class to className and for to htmlFor in jsx
                    
Textarea.propTypes={message: PropTypes.string};

Textarea.defaultProps={message: "Enter text here"};