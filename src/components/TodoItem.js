import React from 'react'
// import PropTypes from 'prop-types'

export default function TodoItem({todo,onDelete,onEdit}) {
  return (
    <div>
      <p><i><b>{todo.uiIndex}</b></i></p>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <button className="btn btn-sm btn-edit"  onClick={()=>{onEdit(todo)}}>Edit</button>

      <hr/>
    </div>
  )
}
