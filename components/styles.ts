import styles from '@styles/sdk-override.module.css';

export const BOXYHQ_UI_CSS = {
  button: {
    ctoa: 'btn btn-primary',
    destructive: 'btn btn-md btn-error',
  },
  input: `${styles['sdk-input']} input input-bordered`,
  select: styles['sdk-select'],
  textarea: styles['sdk-input'],
  confirmationPrompt: {
    button: {
      ctoa: 'btn btn-md',
      cancel: 'btn btn-md btn-outline',
    },
  },
  secretInput: 'input input-bordered',
  section: 'mb-8',
};
