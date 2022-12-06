import { useSelector } from 'react-redux';
import { useActions } from './use-Actions';
import {
  addTodo,
  editTodo,
  removeTodo,
  toggleTodo
} from '../redux/todos-actions';

/**
 * we created a custom hook to use todo related actions and its state
 * @returns todo state and actions
 */

export const useTodo = () => {
  const todoes = useSelector((state) => state.todoes);
  const actions = useActions({ addTodo, removeTodo, editTodo, toggleTodo });

  return { todoes, ...actions };
};
