"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function LazyLoadWrapper({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {show ? children : null}
    </div>
  );
}
