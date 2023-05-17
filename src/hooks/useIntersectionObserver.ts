import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useIntersectionObserver = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [rootMargin, setRootMargin] = useState('-25% 0px');

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

  const { inView, ref: inViewRef } = useInView({
    triggerOnce: true,
    rootMargin,
  });

  const setRefs = (node: HTMLElement | null) => {
    ref.current = node;
    inViewRef(node);
  };

  return [setRefs, inView];
};

export default useIntersectionObserver;
