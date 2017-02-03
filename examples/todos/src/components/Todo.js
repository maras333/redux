import React, { PropTypes } from 'react'

const Todo = ({ onClick, onRemoveClick, completed, text }) => (
  <div>
    <li onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button style={{display: 'inline'}}
      onClick={onRemoveClick}>Remove</button>
  </div>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
