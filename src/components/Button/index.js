import styles from './Button.module.scss';

export default function Button({ disabled, children, type, onClick }) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
