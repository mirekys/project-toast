import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf'
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const INITIAL_VARIANT = 'notice'

function ToastPlayground () {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(INITIAL_VARIANT)
  const [toasts, setToasts] = React.useState([])

  function popToast (e) {
    e.preventDefault()
    const newToast = {
      id: crypto.randomUUID(),
      message, variant
    }

    setToasts(previousToasts => [...previousToasts, newToast])
    setVariant(INITIAL_VARIANT)
    setMessage('')
  }

  function handleDismiss (id) {
    setToasts(previousToasts => [...previousToasts.filter(toast => toast.id !== id)])
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} onDismiss={handleDismiss} />

      <form onSubmit={popToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => {
              const variantId = `variant-${option}`
              return (
                <label key={variantId} htmlFor={variantId}>
                  <input
                    id={variantId}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={e => setVariant(e.target.value)}
                  />
                  {option}
                </label>)
            })}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper} `}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
