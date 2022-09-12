import React, { useReducer } from 'react';
import { CHANGE_SCREEN } from '../method.types';
import { ScreenContext } from './screen.context';
import { screenReducer } from './screen.reducer';

export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = id => dispatch({ type: CHANGE_SCREEN, payload: id });

  return (
    <ScreenContext.Provider
      value={{
        changeScreen,
        todoId: state,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
