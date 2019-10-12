import React from 'react';
import { withRouter } from 'react-router-dom';
import { db, auth, functions } from '../../constants/firebase-roles'
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
                   if(idTokenResult.claims.isMaster)
                    this.props.history.push("/master")
                   if(idTokenResult.claims.isAdmin)
                    this.props.history.push("/dashboard")
                   if(idTokenResult.claims.isUser)
                    this.props.history.push("/connect")
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
       auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(user=>{
            console.log(user);
            let createMaster = functions.httpsCallable('addMasterRole');
            createMaster({ email: this.state.email}).then(user_cred=>{
                console.log(user_cred)
            })
       })
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