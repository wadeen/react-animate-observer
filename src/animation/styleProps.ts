import { TransformProps } from '../animation/types';

// Transform props: "Self-made" because it is not in CSSProperties
export const transformProps: ReadonlyArray<keyof TransformProps> = [
  'translateX',
  'translateY',
  'translateZ',
  'skewX',
  'skewY',
  'scaleX',
  'scaleY',
  'scaleZ',
];
