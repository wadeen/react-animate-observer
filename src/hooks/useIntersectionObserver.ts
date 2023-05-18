import { useState, useEffect, RefObject, RefCallback } from 'react';
import { useInView } from 'react-intersection-observer';

type IntersectionObserverReturnType = [RefCallback<HTMLElement>, boolean];

const useIntersectionObserver = (): IntersectionObserverReturnType => {
  const [rootMargin, setRootMargin] = useState('-25% 0px');
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    rootMargin,
  });

  useEffect(() => {
    const updateRootMargin = () => {
      setRootMargin(
        window.matchMedia('(min-width: 768px)').matches
          ? '-25% 0px'
          : '-5% 0px',
      );
    };

    updateRootMargin(); // 初期設定
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', updateRootMargin); // リスナーの設定

    return () => {
      // コンポーネントがアンマウントされたときにリスナーを削除する
      window
        .matchMedia('(min-width: 768px)')
        .removeEventListener('change', updateRootMargin);
    };
  }, []);

  const setRefs: RefCallback<HTMLElement> = (node) => {
    inViewRef(node);
  };

  return [setRefs, inView];
};

export default useIntersectionObserver;
