import React from "react";
import './counter.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

Refres = ()=>{
    this.setState({count:0});
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Increment/Decrement</h1>
        <h1 className="counter-heading">Count: {this.state.count}</h1>
        <div className="button-container">
          <button className="button increment" onClick={this.Increment}>
            Increment
          </button>
          <button className="button decrement" onClick={this.Decrement}>
            Decrement
          </button>
          <button className="button decrement" onClick={this.Refres}>
            Refres
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
