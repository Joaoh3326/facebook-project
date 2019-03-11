import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return <div>TESTE</div>;
  }
}

render(document.getElementById("app"), <App />);
