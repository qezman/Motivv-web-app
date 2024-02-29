import React from 'react';

export const GlobalContext = React.createContext({});

function Provider({ children }) {
  const [applyCardInfo, setApplyCardInfo] = React.useState(null);

  return (
    <GlobalContext.Provider
      value={{
        applyCardInfo,
        setApplyCardInfo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Provider;
