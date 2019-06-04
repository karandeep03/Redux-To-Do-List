import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Button from './components/buttonComponent';
import Input from './components/inputComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <Input type='text' ph='text' typing={this.props.onHandleChange} />
          <br />
          <Button title={ this.props.title }  clicked={ this.props.onHandleClick } />
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
    list: state.list,
    title: state.buttonTitle
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
