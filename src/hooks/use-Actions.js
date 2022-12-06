import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * @param {we pass actions on Object format to combine them} actions
 * @returns combined actions
 */

export const useActions = (actions) => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};
