import React from 'react';
import ScrollAnimator from './animation/ScrollAnimator';
import { observerOptions } from './constants/optionObserver';

export default function App() {
  return (
    <main className="wrapper">
      <h1 className="title">This is Demo space</h1>
      <ScrollAnimator className="space">space</ScrollAnimator>
      <ScrollAnimator className="space">space</ScrollAnimator>
      <ScrollAnimator
        as="section"
        className="space"
        start={{ opacity: 0, translateX: 100 }}
        end={{ opacity: 1, translateX: 0 }}
      >
        space
      </ScrollAnimator>
      <ScrollAnimator
        observerOptions={observerOptions}
        as="article"
        className="space"
        start={{ opacity: 0, translateX: -100 }}
        end={{ opacity: 1, translateX: 0 }}
      >
        space
      </ScrollAnimator>
      <ScrollAnimator
        className="space"
        start={{ opacity: 0, skewX: 70, skewY: 30 }}
        end={{ opacity: 1, skewX: 0, skewY: 0 }}
        transition={{
          transition: 'opacity .3s ease, transform .4s ease-in',
          transitionDelay: 0.6,
        }}
      >
        space
      </ScrollAnimator>
      <ScrollAnimator customStyle={true} className="space custom">
        space
      </ScrollAnimator>
      <div
        style={{
          transitionDuration: '0.4s',
        }}
      ></div>
    </main>
  );
}
