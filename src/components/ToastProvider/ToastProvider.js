import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider ({ children }) {

  const [toasts, setToasts] = React.useState([])

  const pop = React.useCallback(({ message, variant }) => {
    const newToast = {
      id: crypto.randomUUID(),
      message, variant
    }
    setToasts(previousToasts => [...previousToasts, newToast])
  }, [])

  function dismiss (id) {
    setToasts(previousToasts => [...previousToasts.filter(toast => toast.id !== id)])
  }

  return <ToastContext.Provider value={{ toasts, pop, dismiss }} >
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
