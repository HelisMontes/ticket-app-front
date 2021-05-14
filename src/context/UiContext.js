import React, {createContext, useState} from 'react';

export const UiContext = createContext();

export const UiProvider = ({children}) => {
  const [hiddenBar, setHiddenBar] = useState(false);
  const showMenu = () => {
    setHiddenBar(false);
  }
  const hideMenu = () => {
    setHiddenBar(true);
  }
  return (
    <UiContext.Provider value={{ hiddenBar, showMenu, hideMenu }}>
      { children }
    </UiContext.Provider>
  )
}
