import { FilterProps, TransformProps, TransitionProps } from './types';

// Basic transform properties
export const transformProps: ReadonlyArray<keyof TransformProps> = [
  'x',
  'y',
  'z',
  'rotateX',
  'rotateY',
  'rotateZ',
  'skewX',
  'skewY',
  'scaleX',
  'scaleY',
  'scaleZ',
  'origin',
];

// Basic transition properties
export const transitionProps: ReadonlyArray<keyof TransitionProps> = [
  'delay',
  'duration',
  'timing',
];

// Basic filter properties
export const filterProps: ReadonlyArray<keyof FilterProps> = ['opacity'];
