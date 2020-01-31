import { useState, useRef, useEffect, createElement, cloneElement } from "react";
import { animated, useSpring } from "react-spring";
import { useObserver } from '@alexvcasillas/use-observer';
import { genericConfig, bounceConfig } from "../types/config.type";

export function BounceInLeft({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);
  
  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { x } = useSpring({
    x: (once && onceAppeared) ? 0 : inView ? 0 : -10,
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
      transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
    },
    ref,
  }, children);
}

export function BounceInRight({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { x } = useSpring({
    x: (once && onceAppeared) ? 0 : inView ? 0 : 10,
    config: {
      mass,
      tension,
      friction
    }
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
    },
    ref,
  }, children);
}

export function BounceInTop({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { y } = useSpring({
    y: (once && onceAppeared) ? 0 : inView ? 0 : -10,
    config: {
      mass,
      tension,
      friction
    }
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
    },
    ref,
  }, children);
}

export function BounceInBottom({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', once = false, children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });

  const { y } = useSpring({
    y: (once && onceAppeared) ? 0 : inView ? 0 : 10,
    config: {
      mass,
      tension,
      friction
    }
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
    },
    ref,
  }, children);
}