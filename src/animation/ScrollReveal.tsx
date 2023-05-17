import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes, ElementType, ReactNode } from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  start?: MotionProps["animate"];
  end?: MotionProps["animate"];
  transition?: MotionProps["transition"];
  as?: keyof typeof motion | ElementType;
  customStyle?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, start = { opacity: 0, y: 30 }, end = { opacity: 1, y: 0 }, transition = { duration: 0.7, delay: 0.3 }, as = "div", customStyle = false, ...props }) => {
  const [ref, inView] = useIntersectionObserver();
  const MotionComponent = motion[as as keyof typeof motion] as ElementType;

  return (
    <>
      {customStyle ? (
        <MotionComponent ref={ref} data-is-active={inView} {...props}>
          {children}
        </MotionComponent>
      ) : (
        <MotionComponent ref={ref} initial={start} animate={inView ? end : start} viewport={{ once: true }} transition={transition} data-is-active={inView} {...props}>
          {children}
        </MotionComponent>
      )}
    </>
  );
};
