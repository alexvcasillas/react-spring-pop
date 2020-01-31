import { useState, useRef, useEffect, createElement, cloneElement } from "react";
import { animated, useSpring } from "react-spring";
import { useObserver } from '@alexvcasillas/use-observer';
import { genericConfig, bounceConfig } from "../types/config.type";

export function PopIn({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);
  
  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { scale } = useSpring({
    scale: (once && onceAppeared) ? 1 : inView ? 1 : 0.8,
    config: {
      mass,
      tension,
      friction,
    }
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: scale.interpolate(scale => `scale(${scale})`)
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: scale.interpolate(scale => `scale(${scale})`)
    },
    ref,
  }, children);
}

export function PopInLeft({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);
  
  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { transform } = useSpring({
    transform:
      (once && onceAppeared)
      ? `translate3d(0, 0, 0) scale(1)`
      : inView
        ? `translate3d(0, 0, 0) scale(1)`
        : `translate3d(-50px, 0, 0) scale(0.8)`,
    config: {
      mass,
      tension,
      friction,
    }
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children);
}

export function PopInRight({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { transform } = useSpring({
    transform: 
      (once && onceAppeared)
      ? `tranlate3d(0, 0, 0) scale(1)`
      : inView
        ? `translate3d(0, 0, 0) scale(1)`
        : `translate3d(50px, 0, 0) scale(0.8)`,
    config: {
      mass,
      tension,
      friction,
    }
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children);
}

export function PopInTop({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { transform } = useSpring({
    transform: 
      (once && onceAppeared)
      ? `tranlate3d(0, 0, 0) scale(1)`
      : inView
        ? `translate3d(0, 0, 0) scale(1)`
        : `translate3d(0, 50px, 0) scale(0.8)`,
    config: {
      mass,
      tension,
      friction,
    }
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children);
}

export function PopInBottom({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { transform } = useSpring({
    transform: 
      (once && onceAppeared)
      ? `tranlate3d(0, 0, 0) scale(1)`
      : inView
        ? `translate3d(0, 0, 0) scale(1)`
        : `translate3d(0, -50px, 0) scale(0.8)`,
    config: {
      mass,
      tension,
      friction,
    }
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children);
}