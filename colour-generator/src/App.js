import React from "react";
import "./App.css";
import Color from "./Components/Color";
import { connect } from "react-redux";

class App extends React.Component {
  state = {
    color1: "#124E78",
    color2: "#124E78",
    color3: "#124E78",
    color4: "#124E78",
    color5: "#124E78"
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
        color1: (this.props.whichColorsAreLocked[0]) ? prevState.color1: this.colorMaker(),
        color2: (this.props.whichColorsAreLocked[1]) ? prevState.color2: this.colorMaker(),
        color3: (this.props.whichColorsAreLocked[2]) ? prevState.color3: this.colorMaker(),
        color4: (this.props.whichColorsAreLocked[3]) ? prevState.color4: this.colorMaker(),
        color5: (this.props.whichColorsAreLocked[4]) ? prevState.color5: this.colorMaker(),
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
    return (
      <div>
        <div className="Colours-container">
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color1} isLocked={this.props.isColor1Locked} toggleLock={this.toggleLock} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color2} isLocked={this.props.isColor2Locked} toggleLock={this.toggleLock} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color3} isLocked={this.props.isColor3Locked} toggleLock={this.toggleLock} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color4} isLocked={this.props.isColor4Locked} toggleLock={this.toggleLock} />
          </div>
          <div className="animate__animated animate__backInDown">
            <Color color={this.state.color5} isLocked={this.props.isColor5Locked} toggleLock={this.toggleLock} />
          </div>
        </div>
        <button className="generate-color" onClick={this.handleChange}>
          Generate Colors
        </button>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    whichColorsAreLocked: state.toggleLockReducer.whichColorsAreLocked,
    isColor1Locked: state.toggleLockReducer.isColor1Locked,
    isColor2Locked: state.toggleLockReducer.isColor2Locked,
    isColor3Locked: state.toggleLockReducer.isColor3Locked,
    isColor4Locked: state.toggleLockReducer.isColor4Locked,
    isColor5Locked: state.toggleLockReducer.isColor5Locked,
  };
};

export default connect(mapStateToProps, null)(App);


