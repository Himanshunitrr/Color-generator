import React, { Component } from 'react'
import "./Color.css"
import { connect } from "react-redux";
import { toggleLock } from "../actions/Actions";
class Color extends Component {
  handleClick = (e) => {
    this.props.toggleLock(e)
  }
  handleMouseEnter = (e) => {
    let hex = e.target.firstChild.firstChild;
    hex.style.display = "block" 
  }
  handleMouseLeave = (e) => {
    let hex = e.target.firstChild.firstChild;
    hex.style.display = "none" 
  }
  render() {
    let myStyle = {
      height: "100%",
      width: "100%",
      background: this.props.color
    }
    // console.log(this.myStyle.background)
    return (
      <div className="color" style={myStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="color-modifiers">
          <div className="color-hex">{this.props.color}</div>
          {(this.props.isLocked) ?
          <i onClick={this.handleClick} className="fa fa-lock" aria-hidden="true"/>
          :
          <i onClick={this.handleClick} className="fa fa-unlock" aria-hidden="true"/>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    whichColorsAreLocked: state.toggleLockReducer.whichColorsAreLocked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLock: (e) => dispatch(toggleLock(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color);
