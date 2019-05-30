import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <input type='text' placeholder='text' onChange={ this.props.onHandleChange } ></input>
          <br />
          <button onClick={ this.props.onHandleClick } >Add to List</button>
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
    onHandleChange: (e) => dispach({ type: 'INPUT_CHANGE', value: e.target.value}),
    onHandleClick: () => dispach({ type: 'ADD_ITEM' }),
    onHandleDelete: (id) => dispach({ type: 'DELETE_ITEM', value: id })

  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
