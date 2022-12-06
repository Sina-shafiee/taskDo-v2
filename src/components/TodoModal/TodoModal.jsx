import { useState } from 'react';
import { useModal } from '../../hooks/use-modal';
import { useTodo } from '../../hooks/use-todo';
import './TodoModal.css';

const TodoModal = () => {
  const { showModal, closeModal } = useModal();
  const { addTodo } = useTodo();
  const [todoInput, setTodoInput] = useState('');

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // if todo input had any value we are gonna create new todo object-
    // -with {title, id, and isCompleted} and we are gonna dispatch our-
    // -new todo to todo state

    if (todoInput) {
      const newTodo = {
        title: todoInput,
        id: new Date().getTime(),
        isCompleted: false
      };

      addTodo(newTodo);
      setTodoInput('');
      closeModal();
    }
  };

  return (
    <section>
      <div className={`modal-content ${showModal && 'show-modal-content'}`}>
        <h4>Enter a new todo</h4>
        <form onSubmit={handleSubmit} className='modal-form'>
          <textarea
            required
            minLength={4}
            maxLength={50}
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          ></textarea>
          <button className='btn btn-submit' type='submit'>
            Save
          </button>
          <button
            onClick={() => closeModal()}
            className='btn btn-cancel'
            type='button'
          >
            Cancel
          </button>
        </form>
      </div>
      <div
        onClick={() => closeModal()}
        className={`modal ${showModal && 'show-modal'}`}
      ></div>
    </section>
  );
};

export default TodoModal;
