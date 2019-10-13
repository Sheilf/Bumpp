import React from 'react';
import { withRouter } from 'react-router-dom'
import { auth, functions } from '../../constants/firebase-roles'
import {Flexbox} from '../../styles/inline-react';
import './Login.css';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: ''
        }

        
    }

    componentDidMount(){
        auth.signOut();
        auth.onAuthStateChanged(user=>{
            if(user){
                user.getIdTokenResult().then(idTokenResult =>{
                    console.log("ROLE:"+idTokenResult.claims.role);
                    this.props.history.push(`/${idTokenResult.claims.role}`)
                })
            }
        })
    }

    updateLoginField(event){
        let name = event.target.name
        this.setState({
            [name]: event.target.value 

        })
    }

    handleLogin(event){
  
       event.preventDefault();
       console.log(this.state.email, this.state.password)
       auth.signInWithEmailAndPassword(this.state.email, this.state.password)
       .catch(error=>{
           console.log(error.message);
       })   

    
    }

    render(){
        let { email, password } = this.state;
        console.log(email, password)
        return(
            <form id="Login"
                onSubmit={event=>this.handleLogin(event)} 
                style={Flexbox.flexColumnCenter}
            >
                <label style={Flexbox.flexColumn}>
                    E-Mail: 
                    <input 
                        onChange={event=>this.updateLoginField(event)} 
                        type="text" 
                        name="email"
                        value={email}
                        
                        />
                </label>
                <label style={Flexbox.flexColumn}>
                    Password: 
                    <input 
                        onChange={event=>this.updateLoginField(event)} 
                        type="password" 
                        name="password"
                        value={password} 
                    />
                </label>

                <label id="submit-label">
                    <input 
                        style={Flexbox.flexColumnCenter} 
                        type="submit" 
                        value="Login" 
                    />
                </label>
            </form>
        )
    }
}


export default withRouter(Login);