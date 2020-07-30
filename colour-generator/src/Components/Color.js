import React, { Component } from 'react'


export default class Color extends Component {
  width = window.innerWidth
  render() {
    let myStyleMob = {
      height: "19vh",
      width: "100vw",
      background: this.props.color
    }
    let myStyleFull = {
      height: "95vh",
      width: "20vw",
      background: this.props.color
    }
    // console.log(this.myStyle.background)
    return (
      <div className="color rotate" style={(this.width < 500) ? myStyleMob : myStyleFull}>
        
      </div>
    )
  }
}
