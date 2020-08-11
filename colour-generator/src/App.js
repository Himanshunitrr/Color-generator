import React from "react";
import "./App.css";
import Color from "./Components/Color";
import { Provider } from "react-redux";
import store from "./store/store"
class App extends React.Component {
  state = {
    color1: "#124E78",
    color2: "#124E78",
    color3: "#124E78",
    color4: "#124E78",
    color5: "#124E78",
    whichColorsAreLocked: [0, 0, 0, 0, 0],
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
    this.setState(prevState => {
      return {
        color1: (this.state.whichColorsAreLocked[0]) ? prevState.color1: this.colorMaker(),
        color2: (this.state.whichColorsAreLocked[1]) ? prevState.color2: this.colorMaker(),
        color3: (this.state.whichColorsAreLocked[2]) ? prevState.color3: this.colorMaker(),
        color4: (this.state.whichColorsAreLocked[3]) ? prevState.color4: this.colorMaker(),
        color5: (this.state.whichColorsAreLocked[4]) ? prevState.color5: this.colorMaker(),
      }
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
    let isColor1Locked = this.state.whichColorsAreLocked[0]
    let isColor2Locked = this.state.whichColorsAreLocked[1]
    let isColor3Locked = this.state.whichColorsAreLocked[2]
    let isColor4Locked = this.state.whichColorsAreLocked[3]
    let isColor5Locked = this.state.whichColorsAreLocked[4]
    return (
      <Provider store={store}>
      <div>
        <div className="Colours-container">
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color1} whichColorsAreLocked={this.state.whichColorsAreLocked} isLocked={isColor1Locked} toggleLock={this.toggleLock} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color2} whichColorsAreLocked={this.state.whichColorsAreLocked} isLocked={isColor2Locked} toggleLock={this.toggleLock} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color3} whichColorsAreLocked={this.state.whichColorsAreLocked} isLocked={isColor3Locked} toggleLock={this.toggleLock} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color4} whichColorsAreLocked={this.state.whichColorsAreLocked} isLocked={isColor4Locked} toggleLock={this.toggleLock} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color5} whichColorsAreLocked={this.state.whichColorsAreLocked} isLocked={isColor5Locked} toggleLock={this.toggleLock} />
          </div>
        </div>
        <button className="generate-color" onClick={this.handleChange}>
          Generate Colors
        </button>
        </div>
      </Provider>
    );
  }
}


export default App;


