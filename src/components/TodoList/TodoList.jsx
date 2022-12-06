import { useTodo } from '../../hooks/use-todo';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const TodoList = () => {
  const { todoes } = useTodo();

  return (
    <section className='todo-list'>
      {todoes.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </section>
  );
};

export default TodoList;
