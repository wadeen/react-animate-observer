import { CSSProperties } from 'react';

// Things not supported by CSSProperties
export type TransformProps = Partial<{
  translateX: number;
  translateY: number;
  translateZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  skewX: number;
  skewY: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
}>;

export type TransitionProps = Partial<{
  transitionDelay: number;
  transitionDuration: number;
  transitionProperty: CSSProperties['transitionProperty'];
  transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  transition: CSSProperties['transition'];
}>;

// base style props
export type StyleProps = CSSProperties & TransformProps;
