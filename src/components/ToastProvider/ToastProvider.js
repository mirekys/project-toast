import React from 'react';
import useEscapeKey from './use-escape';

export const ToastContext = React.createContext()

function ToastProvider ({ children }) {
  const [toasts, setToasts] = React.useState([])
  useEscapeKey(dismissAll)

  const pop = React.useCallback(({ message, variant }) => {
    const newToast = {
      id: crypto.randomUUID(),
      message, variant
    }
    setToasts(previousToasts => [...previousToasts, newToast])
  }, [])

  function dismissAll () {
    setToasts([])
  }

  function dismiss (id) {
    setToasts(previousToasts => [...previousToasts.filter(toast => toast.id !== id)])
  }


  return <ToastContext.Provider value={{ toasts, pop, dismiss, dismissAll }} >
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
