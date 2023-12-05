import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Tech Blog</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. When to use Context API?
        </h2>
        <p>
          The Context API in React is useful when you need to pass data through
          the component tree without having to pass props down manually at every
          level. It's particularly handy for global state management in your
          application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. What is a Custom Hook?
        </h2>
        <p>
          A custom hook in React is a JavaScript function that starts with "use"
          and can call other hooks. It allows you to reuse stateful logic across
          components. Custom hooks are a way to extract and share logic in a
          React application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. What is useRef?</h2>
        <p>
          useRef is a hook in React used to access the mutable object (ref
          object) with a current property pointing to the actual DOM element.
          It's commonly used to interact with and manipulate the DOM directly,
          such as focusing an input element.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. What is useMemo?</h2>
        <p>
          useMemo is a hook in React that helps in memoizing the result of a
          complex computation. It remembers the result of the computation and
          returns the cached result when the inputs (dependencies) are the same.
          It's useful for optimizing performance by avoiding unnecessary
          recalculations.
        </p>
      </section>
    </div>
  );
};

export default Blog;
