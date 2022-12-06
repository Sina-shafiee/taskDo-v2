import { IoAddCircle } from 'react-icons/io5';

import './App.css';

import { useModal } from './hooks/use-modal';

import TodoList from './components/TodoList/TodoList';
import TodoModal from './components/TodoModal/TodoModal';

function App() {
  const { openModal } = useModal();

  return (
    <main className='App'>
      <section className='left'>
        <h1>TaskDo</h1>
        <p>Manage your todos easily</p>
      </section>
      <section className='right'>
        <p className='add-todo' onClick={() => openModal()}>
          <IoAddCircle className='add-icon' />
          <span>Add new todo</span>
        </p>
        <TodoList />
      </section>
      <TodoModal />
    </main>
  );
}

export default App;
