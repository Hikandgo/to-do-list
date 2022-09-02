import { ScreenContext } from './screen.context';

export const ScreeState = ({ children }) => {
  return <ScreenContext.Provider value=({})>{children}</ScreenContext.Provider>;
};
