import { useState, useEffect, useRef } from "react";

export function useNearScreen({
  distance = "500px",
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      // console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const observable = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    if (element) observable.observe(element);

    return () => observable.disconnect();
  });

  return { isNearScreen, fromRef };
}
