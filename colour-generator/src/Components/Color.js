import React, { Component } from 'react'
import "./Color.css"
import { connect } from "react-redux";
import { toggleLock } from "../actions/Actions";
class Color extends Component {
  render() {
    let myStyle = {
      height: "100%",
      width: "100%",
      background: this.props.color
    }
    // console.log(this.myStyle.background)
    
    return (
      <div className="color" style={myStyle}>
        <div className="color-modifiers">
          {(this.props.isLocked) ?
          <i onClick={this.props.toggleLock(e)} className="fa fa-lock" aria-hidden="true"/>
          :
          <i onClick={this.props.toggleLock(e)} className="fa fa-unlock" aria-hidden="true"/>}
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
