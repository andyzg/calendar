export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    content: text,
  }
}
