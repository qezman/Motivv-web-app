import React from 'react';

import { GlobalContext } from './global-context';

export function useGlobalContext() {
  return React.useContext(GlobalContext);
}

export { default as GlobalContextProvider } from './global-context';
