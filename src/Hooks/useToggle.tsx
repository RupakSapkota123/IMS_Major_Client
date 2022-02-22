import useLocalStorage from 'Hooks/useLocalStorage';
import React from 'react';
import useSessionStorage from './useSessionStorage';

export const ToggleContext = React.createContext<any>({});

// provide a stored toggle state to global context

const useToggle = (key: any, initValue: boolean) => {
  const [value, setValue] = useSessionStorage(key, initValue);
  // use useContext to access the toggle state from the parent component
  const toggleHandle = (action: string) => {
    console.log('action===>', action);
    setValue((prev: any) => {
      return typeof action === 'boolean' ? action : !prev;
    });
  };

  const handleOpen = () => {
    setValue(false);
  };

  return { value, toggleHandle, handleOpen };
};

export const ToggleProvider = (props: any) => {
  const { children } = props;
  const { value, toggleHandle, handleOpen } = useToggle('toggle', false);

  console.log('value===>', value);

  return (
    <ToggleContext.Provider value={{ value, toggleHandle, handleOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default useToggle;
