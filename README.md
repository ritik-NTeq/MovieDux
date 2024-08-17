# MovieDux <img src="public/fav.png" height="40" align="center">

Creating frontend web application <em>MovieDux</em> using React

# React JS <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" height ="40" align="center">

## Document Object Model

- React creates single page application. It doesn't load the whole page on updation. React only updates the section of the page where change was made.
- It updates <strong>DOM (Document Object Model)</strong>. But in React, we dont update the DOM directly like in HTML.
- React uses Virtual DOM - a JS object, lightweight version of Real DOM. And updating virtual DOM is much faster than Real DOM.
  <br>

## Create React App

1. Install nodeJS (node, npm, npx)
2. `npx create-react-app moviedux`
3. cd moviedux

## JSX (Javascript XML)

- U can write HTML like code in JS which is JSX. It is the vase of React.

## Components in React

- ReactJS uses <strong>component</strong> based architecture.
  > Component is a small piece of UI code which is <em>reusable</em> and <em>manageable</em>.
  > They are functions that return JSX.
  > <strong>Reusable</strong>: User can create a component and export it and use it inside another component by importing it.
  > <strong>Manageable</strong>: Components can manage their own <em>state</em> and lifecycle.
- There are 2 types of components: <strong>Class-based component</strong>(not used anymore) and <strong>Function-based component</strong>

### Function-based Component

- When we write HTML tag like syntax in JS, it is <strong>JSX</strong>. JSX is used in React to describe how the UI should look like. JSX is the core of react syntax.

## State

- We use state in React to manage the data of components.
- State consists of 2 parts- getting and setting value
- `useState()` is used to define state variable and `useEffect()` is used to initialise state with data (codes which run only once)
  > Whenever the value of the state changes, it calls the function (set) which then re-renders the UI of that component.

## Props (properties)

- props are used to pass <b>data</b>, <b>functions</b> or <b>event handlers</b> to components.
- U can pass props to multiple nested components. This is called <b>prop drilling</b>

## Router

- In React, we use `Router` to navigate the user between components or webpages.
- Use `Routes` to configure the routing.
- Use `Link` to navigate the user.
