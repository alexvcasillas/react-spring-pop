# React Spring POP!

![React Spring POP! Logo](https://github.com/alexvcasillas/react-spring-pop/blob/master/logo/react-spring-pop-logo.png?raw=true)

## Contents

1. [Introduction](#introduction)
2. [Motivation](#motivation)
3. [Installation](#installation)
4. [Basic usage](#basic-usage)
6. [Demo](#demo)
5. [Others](#others)

## Introduction

**React Spring POP!** is a physics based animation library for your React application. It uses [React Spring](https://www.react-spring.io/) to generate performant off-thread calculations for the physics based animations and the _Intersection Observer_ API with the [@alexvcasillas/use-observer](https://github.com/alexvcasillas/use-observer) library which both of them are pretty cool and my defaults to go.

## Motivation

I started working on animating some components when they appeared at the viewport to make cool landing pages animations and other cool applications' stuff. Then I realized that this could potentially be useful for many other developers out there in the wild, so I decided to create this library just for you to have this things out-of-the-box and not having to deal with configs and bla bla bla.

## Installation

```cmd
yarn add react-spring-pop react react-spring
```

```cmd
npm i -s react-spring-pop react react-spring
```

This project has two peer dependecies which are: [React](https://reactjs.org) and [React Spring](https://www.react-spring.io/). You will need both of the installed in your project in order for **React Spring POP!** to work properly.

## Basic usage

```jsx
import { PopIn } from "react-spring-pop";

function App() {
  return (
    <PopIn>
      {/* Whatever your want to pop-in here! */}
    </PopIn>
  )
}
```

## Demo

You can check a demo featuring all of the animations on the always marvelous [CodeSandbox.io](https://codesandbox.io/s/react-spring-pop-demo-696b8?fontsize=14)

## Pop Animations

**React Spring POP!** comes out-of-the-box with a few components to deal with pop in animations. Those components are the following.

* `PopIn`
* `PopInLeft`
* `PopInRight`
* `PopInTop`
* `PopInBottom`

This components will accept the following props to configure a little its behaviour:

```js
prop: element;
  type: string;
  default: 'div';

prop: once;
  type: boolean;
  default: false;

prop: threshold;
  type: number;
  default: 0;
  min: 0;
  max: 1;

prop: tension;
  type: number;
  default: 180;
  min: 1;
  max: 500;

prop: friccion;
  type: number;
  default: 12;
  min: 1;
  max: 500;

prop: mass;
  type: number;
  default: 1;
  min: 1;
  max: 500;
```

The **element** property indicates which kind of HTML element would you like to generate for this animated component.

The **once** property indicates if the animation should be only triggered once and no more, so it will only get triggered the first time the element is on the viewport with the given threshold.

The **threshold** property indicates how much of the component needs to be displayed within the viewport to trigger the animation. It will take a number from 0 to 1 to indicate the percentage of the component that's on the viewport, meaning that 0.5 will be equals to the 50% of the component.

The **tension** property indicates the spring energetic load.

The **friccion** property indicates the spring resistance.

The **mass** property indicates the spring mass.

## Fade Animations

**React Spring POP!** comes out-of-the-box with a few components to deal with fade in animations. Those components are the following.

* `FadeIn`
* `FadeInLeft`
* `FadeInRight`
* `FadeInTop`
* `FadeInBottom`

This components will accept the following prop to configure a little its behaviour:

```js
prop: element;
  type: string;
  default: 'div';

prop: once;
  type: boolean;
  default: false;

prop: threshold;
  type: number;
  default: 0;
  min: 0;
  max: 1;
```

The **element** property indicates which kind of HTML element would you like to generate for this animated component.

The **once** property indicates if the animation should be only triggered once and no more, so it will only get triggered the first time the element is on the viewport with the given threshold.

The **threshold** property indicates how much of the component needs to be displayed within the viewport to trigger the animation. It will take a number from 0 to 1 to indicate the percentage of the component that's on the viewport, meaning that 0.5 will be equals to the 50% of the component.

## Bounce Animations

**React Spring POP!** comes out-of-the-box with a few components to deal with bounce in animations. Those components are the following.

* `BounceInLeft`
* `BounceInRight`
* `BounceInTop`
* `BounceInBottom`

This components will accept the following props to configure a little its behaviour:

```js
prop: element;
  type: string;
  default: 'div';

prop: once;
  type: boolean;
  default: false;

prop: threshold;
  type: number;
  default: 0;
  min: 0;
  max: 1;

prop: tension;
  type: number;
  default: 180;
  min: 1;
  max: 500;

prop: friccion;
  type: number;
  default: 12;
  min: 1;
  max: 500;

prop: mass;
  type: number;
  default: 1;
  min: 1;
  max: 500;
```

The **element** property indicates which kind of HTML element would you like to generate for this animated component.

The **once** property indicates if the animation should be only triggered once and no more, so it will only get triggered the first time the element is on the viewport with the given threshold.

The **threshold** property indicates how much of the component needs to be displayed within the viewport to trigger the animation. It will take a number from 0 to 1 to indicate the percentage of the component that's on the viewport, meaning that 0.5 will be equals to the 50% of the component.

The **tension** property indicates the spring energetic load.

The **friccion** property indicates the spring resistance.

The **mass** property indicates the spring mass.

## Others

If you want a more CSS-in-JS approach I've also developed [Animated Styled Components](https://www.npmjs.com/package/animated-styled-components) which makes use of [styled-components](https://www.styled-components.com/) and pure CSS animation keyframes and it comes with a lot of ready to drop in animations!