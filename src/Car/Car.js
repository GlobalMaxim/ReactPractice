import React from "react";
// import Radium from "radium";
import classes from "./Car.module.css";
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Car extends React.Component {

  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps', nextProps)
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', nextProps, nextState)
  //   return true
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate', nextProps, nextState)
  // }
  // // static getDerivedStateFromFrops(nextProps, prevState) {
  // //   console.log('getDerivedStateFromFrops', nextProps, prevState)
  // //   return prevState
  // // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate', )
  // }
  // getSnapshotBeforeUpdate() {
  //   console.log('getSnapshotBeforeUpdate')
  // }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }

  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.current.focus()
    }
    
  }

  render() {
    // console.log('render')
    // if (Math.random() > 0.7) {
    //   throw new Error('Car random failed')
    // }
    const inputClasses = [classes.input]

    if (this.props.name !== "") {
      inputClasses.push(classes.green);
      
    } else {
      inputClasses.push(classes.red);
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold);
    }

    return (
      <React.Fragment>
        <h3>Сar name: {this.props.name}</h3>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car);
