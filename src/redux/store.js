import { combineReducers, legacy_createStore as createStore } from 'redux';
import { todoReducer, modalReducer } from './reducers';
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// combine reducers
const rootReducer = combineReducers({
  todoes: todoReducer,
  showModal: modalReducer
});

// creating our app store
export const store = createStore(rootReducer, enhancer);
