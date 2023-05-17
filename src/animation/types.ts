export type StyleProps = TransformProps & TransitionProps & AnimationProps & FilterProps;

export type TransformProps = Partial<{
  x: string | number;
  y: string | number;
  z: string | number;
  rotate: string | number;
  rotateX: string | number;
  rotateY: string | number;
  rotateZ: string | number;
  skew: string | number;
  skewX: string | number;
  skewY: string | number;
  originX: string | number;
  originY: string | number;
  originZ: string | number;
  perspective: string | number;
  scale: string | number;
  scaleX: string | number;
  scaleY: string | number;
  scaleZ: string | number;
  transform: string | number;
  transformOrigin: string | number;
  transformStyle: string | number;
}>;

export type TransitionProps = Partial<{
  transition: string | number;
  transitionDelay: string | number;
  transitionDuration: string | number;
  transitionProperty: string | number;
  transitionTimingFunction: string | number;
  transitionEnd: string | number;
  transitionStart: string | number;
  transitionIterationCount: string | number;
  transitionDirection: string | number;
  transitionFillMode: string | number;
  transitionPlayState: string | number;
}>;

export type AnimationProps = Partial<{
  visibility: string | number;
  willChange: string | number;
}>;

export type FilterProps = Partial<{
  opacity: string | number;
  filter: string | number;
  backdropFilter: string | number;
}>;
