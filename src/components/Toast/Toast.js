import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast ({ children, variant, onDismiss }) {

  if (!Object.keys(ICONS_BY_VARIANT).includes(variant)) {
    throw new Error(`Unknown Toast variant: ${variant}`)
  }

  const ToastIcon = ICONS_BY_VARIANT[variant]

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variant}{' '}-
        </VisuallyHidden>
        {children}
      </p>
      <button className={styles.closeButton} onClick={onDismiss}
        aria-label="Dismiss message"
        aria-live="off">
        <X size={24} />
      </button>
    </div >
  );
}

export default Toast;
