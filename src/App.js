import React from 'react';
import './App.css';
import { auth } from './constants/firebase-roles';
import { Flexbox } from './styles/inline-react';
import Login from './components/forms/Login';


/*
Log into app and get verified as a user or admin.
*/
class App extends React.Component{

  constructor(){
    super()
    this.state={

    }
  }

  componentDidMount(){

  }
  render(){
    return (
      <main id="App" style={Flexbox.flexColumnShift}>
  
        <p> Welcome to Bumpp. </p>
        <Login />
        
      </main>
    );
  }

}

export default App;
