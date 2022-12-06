import { useRef } from 'react';

import { AiOutlineDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { CgUndo } from 'react-icons/cg';

import { useTodo } from '../../hooks/use-todo';

import './TodoItem.css';

const TodoItem = ({ id, title, isCompleted }) => {
  const { removeTodo, toggleTodo } = useTodo();
  // using ref to add remove class on item element
  const itemRef = useRef(null);

  // handling todo remove
  const handleRemove = () => {
    itemRef.current.classList.add('removedItem');

    setTimeout(() => {
      removeTodo(id);
    }, 400);
  };
  return (
    <article ref={itemRef} className='todo-item'>
      <div className='btns'>
        <button onClick={handleRemove} className='btn-item'>
          <AiOutlineDelete className='icon-item' />
        </button>
        <button onClick={() => toggleTodo(id)} className='btn-item'>
          {isCompleted ? (
            <CgUndo className='icon-item' />
          ) : (
            <MdDone className='icon-item' />
          )}
        </button>
      </div>
      <h2 className={isCompleted ? 'todo-done' : null}>{title}</h2>
    </article>
  );
};

export default TodoItem;
