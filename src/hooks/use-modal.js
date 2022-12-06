import { useActions } from './use-Actions';
import { openModal, closeModal } from '../redux/modal-actions';
import { useSelector } from 'react-redux';

/**
 * we created a custom hook to use modal related actions and its state
 * @returns modal state and actions
 */

export const useModal = () => {
  const showModal = useSelector((state) => state.showModal);
  const actions = useActions({ openModal, closeModal });

  return { showModal, ...actions };
};
