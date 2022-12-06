// importing actions
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './todos-actions';
import { OPEN_MODAL, CLOSE_MODAL } from './modal-actions';

// inital state of the app
const initilaState = {
  todoes: JSON.parse(localStorage.getItem('todos')) || [],
  showModal: false
};

/**
 *
 * @param {our todos state } todoState
 * @param {action we pass we have add todo, remove todo, and toggle todo actions} action
 * @returns new todo state
 */

export const todoReducer = (todoState = initilaState.todoes, action) => {
  // creating a variable to store new data every time new action is dispatched
  let newTodoData;

  switch (action.type) {
    case ADD_TODO:
      newTodoData = [...todoState, action.payload];
      localStorage.setItem('todos', JSON.stringify(newTodoData));
      return newTodoData;

    case REMOVE_TODO:
      newTodoData = todoState.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newTodoData));
      return newTodoData;

    case TOGGLE_TODO:
      const todoIndex = todoState.findIndex(
        (todo) => todo.id === action.payload
      );

      newTodoData = [...todoState];
      newTodoData[todoIndex].isCompleted = !todoState[todoIndex].isCompleted;
      localStorage.setItem('todos', JSON.stringify(newTodoData));
      return newTodoData;

    default:
      return todoState;
  }
};

/**
 *
 * @param {state of our modal} state
 * @param {actions we can pass, we have close modal and open modal actions} action
 * @returns new state of modal
 */

export const modalReducer = (state = initilaState.showModal, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;

    case CLOSE_MODAL:
      return false;

    default:
      return state;
  }
};
