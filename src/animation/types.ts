export type StyleProps = TransformProps & TransitionProps & FilterProps;

export type TransformProps = Partial<{
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  skewX: number;
  skewY: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
  origin: 'left' | 'center' | 'right';
}>;

export type TransitionProps = Partial<{
  delay: number;
  duration: number;
  timing: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
}>;

export type FilterProps = Partial<{
  opacity: number;
}>;
