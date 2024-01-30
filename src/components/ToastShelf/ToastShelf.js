import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf () {
  const { toasts, dismiss } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onDismiss={() => dismiss(id)}>{message}</Toast>
        </li>))}
    </ol>
  );
}

export default ToastShelf;
