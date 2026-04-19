export type ColorName =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'
  | 'grey'
  | 'text';

export type ColorShade =
  | 'xxxlight'
  | 'xxlight'
  | 'xlight'
  | 'lighter'
  | 'light'
  | 'DEFAULT'
  | 'dark'
  | 'darker'
  | 'xdark'
  | 'xxdark'
  | 'xxxdark';

export type OKLCH =
  | `oklch(${number}% ${number} ${number})`
  | `oklch(${number} ${number} ${number} / ${number | `${number}%`})`;
