import * as React from "react";
import { animated, useSpring } from "react-spring";
import { genericConfig, fadeConfig } from "../types/config.type";
import { useObserver } from '@alexvcasillas/use-observer';

export function FadeIn({ threshold = 0, element = 'div', children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });

  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
    },
    ref,
  }, children);
}

export function FadeInLeft({ threshold = 0, element = 'div', children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });

  const { opacity, x } = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : -10,
  });

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
    },
    ref,
  }, children);
}

export function FadeInRight({ threshold = 0, element = 'div', children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });

  const { opacity, x } = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
  });

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
    },
    ref,
  }, children);
}

export function FadeInTop({ threshold = 0, element = 'div', children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });

  const { opacity, y } = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : -10,
  });

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
    },
    ref,
  }, children);
}

export function FadeInBottom({ threshold = 0, element = 'div', children, ...rest }: genericConfig & fadeConfig) {
  const { inView, ref } = useObserver({ threshold });

  const { opacity, y } = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 10,
  });

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
    },
    ref,
  }, children);
}