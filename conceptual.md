### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is  a framwrork used to build large and scalable applications
- What is Babel?
Babel converts newer versions of js into a compatible format for the browser
- What is JSX?
Javascript XML used to write HTML DIRECTLY IN A JS FILE LIKE IN REAct.
- How is a Component created in React?
It is created by having a capital letter for the first letter in the name.
- What are some difference between state and props?
state can be changed but not state
- What does "downward data flow" refer to in React?
it is when props or state(functions or variable) passed into nested components.
- What is a controlled component?

- What is an uncontrolled component?

- What is the purpose of the `key` prop when rendering a list of components?
it is used by react to identity which elements have been added, changed or removed from the DOM.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
it is a poor choice because it not stable, it can change and react will be unable to keep track of that element.
- Describe useEffect.  What use cases is it used for in React components?
useEffect can be used to insulate a function from being rendered everytime the component is re-rendered. It is used for tiing functions and can be used for async functions.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is used to prserve the state of data between renders and it does cause the comonent to be rendered.
- When would you use a ref? When wouldn't you use one?
i would use ref to create a global variable and to keep track of setInterval's returned value(used for clearInterval) since it will preserve it between renders and i would not use it if i have to keep changing the values state.

- What is a custom hook in React? When would you want to write one?
it is a hook made to be used through the application rather than re-typing code. I would use it when I have a lot of repeating code.
