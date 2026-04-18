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

type Percentage = `${number}%`;
type NumberLike = `${number}` | number;

export type OKLCH =
  | `oklch(${Percentage} ${NumberLike} ${NumberLike})`
  | `oklch(${Percentage} ${NumberLike} ${NumberLike} / ${NumberLike | Percentage})`;

export type ShadeScale =
  | 'xxxlight'
  | 'xxlight'
  | 'xlight'
  | 'lighter'
  | 'light'
  | 'base'
  | 'dark'
  | 'darker'
  | 'xdark'
  | 'xxdark'
  | 'xxxdark';
