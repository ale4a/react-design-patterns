# 5 React Design Patterns

In this project share with you problems that I solve using react design patterns for structure better our code. The following patters are:

- Container and Presentational Components 🔥
- Higher-Order Components (HOCs) 🚀
- Render Props 🎨
- Hooks 🎣
- Context API 📚

## Container and Presentational Components 🔥

### Problem

- Create a presentational component for rendering a single product, displaying its details (such as the product name, description, and price).
- Create a container component that fetches a list of products from an API and passes each product down to the presentational component as props.

### Solution

`src/patterns/ContainerPresentationalComponents`

## Higher-Order Components (HOCs) 🚀

### Problem

- Create an HOC that adds a "loading" indicator to a component. The HOC should take a component as an argument and return a new component that shows a spinner while the component is loading.
- Use the HOC to add a loading indicator to the product container component.

### Solution

`src/patterns/HigherOrderComponents`

## Render Props 🎨

### Problem

- Create a component that renders a dropdown menu.
- Use render props to make the dropdown's options configurable, so it can be used in different contexts throughout the application (such as for sorting products or filtering by category).

### Solution

`src/patterns/RenderProps`

## Hooks 🎣

### Problem

- Create a custom hook that manages the state of the user's shopping cart. The hook should allow the user to add or remove products from the cart, as well as update the quantity of each item.
- Use the custom hook to manage the state of the shopping cart throughout the application.

### Solution

`src/patterns/Hooks`

## Context API 📚

### Problem

- Create a context to store the user's preferred currency (such as USD or EUR).
- Use the context to display product prices in the user's preferred currency throughout the application.

### Solution

`src/patterns/ContextApi`

## Documentation

- [link of tutorial](https://linktodocumentation)
- [hoc vs render prop](https://www.youtube.com/watch?v=hfVwBuOdAqQ)
- [Learn React Higher Order Component (HOC) in 10 Minutes](https://www.youtube.com/watch?v=J5P0q7EROfw)
