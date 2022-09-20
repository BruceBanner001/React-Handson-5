import './App.css';
import React from "react";
import ProductList from "./Components/ProductList";
import PureComponent from './Components/PureComponent';

function App() {
  return (
    <>
      <h1>HOC: Higher Order Component</h1>
      <ul>
        <li>A Higher-order component is a function that takes a component and returns a new component.</li>
        <li>A HOC is an advanced technique in React for reusing component logic.</li>
        <li>HOCs are not part of the React API.</li>
        <li>They are a pattern that emerges from React's compositional nature.</li>
      </ul>
      <h1>Syntax:</h1>
      const EnhancedComponent = higherOrderComponent(WrappedComponent);
      <br></br>
      <div className="App">
        <ProductList />
      </div>
      <h1>Pure Components</h1>
      <ul>
        <li>A React component is considered pure if it renders the same output for the same state and props. </li>
        <li>For this type of class component, React provides the PureComponent base class.</li>
        <li>Class components that extend the React. PureComponent class are treated as pure components.</li>
      </ul>
      <div className="App">
        <PureComponent />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
