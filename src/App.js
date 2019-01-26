import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { updateUser } from './actions/user-action'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(props){
    super(props)
  }

  onUpdateUser = (event) => {
    console.log(this.props)
    this.props.onUpdateUser(event.target.value)
  }

  render() {

    console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is a dynamic text field
        </p>
        
        <input onChange={this.onUpdateUser} />
        <div>{this.props.user}</div>
      </div>

    );
  }
}

const mapStateToProps = (state, props) =>({
  products: state.products,
  user: state.user,
  userPlusProps: `${state.user} ${props.randomprop}`
})

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
