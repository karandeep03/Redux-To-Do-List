import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  constructor() {
    super()

    this.inputRef = React.createRef()
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <input type='text' placeholder='text' ref={this.inputRef} ></input>
          <br />
          <button onClick={ this.props.onHandleClick.bind(this, this.inputRef) } >Add to List</button>
          <br />
          <ul>
            {this.props.list.map ((item, index) =>
              <li>{ item } <button onClick={ this.props.onHandleDelete.bind(this, index) } >Delete</button> </li>
            )}
          </ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    str: state.str,
    list: state.list
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onHandleClick: (val) => dispach({ type: 'ADD_ITEM', val: val }),
    onHandleDelete: (id) => dispach({ type: 'DELETE_ITEM', value: id })

  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
