import React from "react";
import PropTypes from 'prop-types';

export default function Todo(props) {
  return (
    <>
   {props.msg ?( <div class="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">{props.message}</label>
    </div>) : ("")}
    </>
  )
}

//change class to className and for to htmlFor in jsx
                    
Todo.propTypes={message: PropTypes.string,
                msg: PropTypes.bool.isRequired
};

Todo.defaultProps={message: "Enter text here",
                   msg: true};