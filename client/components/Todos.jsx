import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'



class Todos extends React.Component {

  getInitialState() {
    return {
      tasks: []
    }
  }

  render() {
    return (
      <div className="todos">
        <div className="todos__day-row">
          <h2 className="todos__day">Saturday, May 27 </h2>
          <div className="todos__day-switcher">
            <img src="./img/left.png" />
          </div>
          <div className="todos__day-switcher">
            <img src="./img/right.png" />
          </div>
        </div>
        <div className="todos__section">
          <span className="todos__section__header late">Late</span>
          <div className="todos__list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
        <div className="todos__section">
          <span className="todos__section__header">Inbox</span>
          <span className="bubble"></span>
          <div className="todos__list">
            <TodoInputContainer />
            {this.props.todos.map((todoText) => <TodoItem text={todoText}/>)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const TodosContainer = connect(
  mapStateToProps
)(Todos)

export default TodosContainer

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todos__item">
        <div className="todos__item__checkbox">
          <img src="img/checkbox.png" />
        </div>
        <div className="todos__item__title">
          {this.props.text}
        </div>
      </div>
    );
  }
}

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
  }

  onAddClick() {
    this.props.onAddClick(this.textInput.value)
    this.textInput.value = "";
  }

  render() {
    return (
      <div className="todos__input">
        <div className="todos__input__add" onClick={this.onAddClick.bind(this)}>
          <img src="img/add.png" />
        </div>
        <input ref={input => { this.textInput = input; }} className="todos__input__text" type="text" placeholder="Add a new task" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (value) => {
      dispatch(addTodo(value))
    }
  }
}

const TodoInputContainer = connect(
  null,
  mapDispatchToProps
)(TodoInput)
