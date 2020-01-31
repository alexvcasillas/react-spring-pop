import { useState, useRef, useEffect, createElement, cloneElement } from "react";
import { animated, useSpring } from "react-spring";
import { genericConfig, fadeConfig } from "../types/config.type";
import { useObserver } from '@alexvcasillas/use-observer';

export function FadeIn({ threshold = 0, element = 'div', once = false, children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);
  
  const { opacity } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
  });
  
  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity,
    },
    ref,
  }, children);
}

export function FadeInLeft({ threshold = 0, element = 'div', once = false, children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);
  
  const { opacity, x } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
    x:  (once && onceAppeared) ? 0 : inView ? 0 : -10,
  });

  const animatedRef = useRef(createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
    },
    ref,
  }, children));

  return cloneElement(animatedRef.current, {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
    },
    ref,
  }, children);
}

export function FadeInRight({ threshold = 0, element = 'div', once = false, children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity, x } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
    x: (once && onceAppeared) ? 0 : inView ? 0 : 10,
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

export function FadeInTop({ threshold = 0, element = 'div', once = false, children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity, y } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
    y: (once && onceAppeared) ? 0 : inView ? 0 : -10,
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

export function FadeInBottom({ threshold = 0, element = 'div', once = false, children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });
  const [onceAppeared, setOnceAppeared] = useState(false);

  useEffect(() => {
    if (once && inView && !onceAppeared) setOnceAppeared(true);
  }, [inView]);

  const { opacity, y } = useSpring({
    opacity: (once && onceAppeared) ? 1 : inView ? 1 : 0,
    y: (once && onceAppeared) ? 0 : inView ? 0 : 10,
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