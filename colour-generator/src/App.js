import React from "react";
import "./App.css";
import Color from "./Components/Color";
class App extends React.Component {
  state = {
    color1: "#124E78",
    color2: "#124E78",
    color3: "#124E78",
    color4: "#124E78",
    color5: "#124E78",
  };
  colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  color = "#124E78";
  colorMaker() {
    this.color =
      "#" +
      this.colorArray[Math.floor(Math.random() * 16)].toString() +
      this.colorArray[Math.floor(Math.random() * 16)].toString() +
      this.colorArray[Math.floor(Math.random() * 16)].toString() +
      this.colorArray[Math.floor(Math.random() * 16)].toString() +
      this.colorArray[Math.floor(Math.random() * 16)].toString() +
      this.colorArray[Math.floor(Math.random() * 16)].toString();
    return this.color;
  }
  handleChange = (e) => {
    this.setState({
      color1: this.colorMaker(),
      color2: this.colorMaker(),
      color3: this.colorMaker(),
      color4: this.colorMaker(),
      color5: this.colorMaker(),
    });
  };
  componentDidMount() {
    this.setState({
      color1: this.colorMaker(),
      color2: this.colorMaker(),
      color3: this.colorMaker(),
      color4: this.colorMaker(),
      color5: this.colorMaker(),
    });
  }
  render() {
    return (
      <div>
        <div className="Colours-container">
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color1} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color2} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color3} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color4} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color5} />
          </div>
        </div>
        <button className="generate-color" onClick={this.handleChange}>
          Generate Colors
        </button>
      </div>
    );
  }
}
export default App;
