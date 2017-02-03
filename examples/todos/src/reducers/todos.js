const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
      break;

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
      break;

    case 'REMOVE_TODO':
      if (state.id !== action.id) {
        console.log(state);
        return state
      }
      break;

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
       break;

    case 'REMOVE_TODO':
      return state.filter(t =>
        todo(t, action)
      )
      break;

    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
      break;

    default:
      return state
  }
}

export default todos
