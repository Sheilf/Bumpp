import React from 'react';
import './App.css';
import { auth } from './constants/firebase-roles';
import { Flexbox } from './styles/inline-react';

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

        <button>
          Login
        </button>
      </main>
    );
  }

}

export default App;
