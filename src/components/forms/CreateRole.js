import React from 'react';
import { ButtonContainer } from '../../containers/ButtonContainer';
import { auth, functions } from '../../constants/firebase-roles'
import { Flexbox } from '../../styles/inline-react';
import './CreateRole.css';

class CreateRole extends React.Component{

    constructor(props){
        super(props)
        this.state={
            password: "",
            email: "",
            display_name: "",
            school: "",
            work_address: "",
            teaches: "",
            pay: "",

        }

    }

    componentDidMount(){
        const generatorPW = Math.random().toString(36).substring(6);
        this.setState({
            password: generatorPW
        }) 
    }


    updateField(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    createRole(event){
        event.persist();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            const addRole = functions.httpsCallable('addRole');
            addRole({email: this.state.email, role: event.target.name})
        })
        .catch(error=>{
            return error
        })
    }
    render(){

        return(
            <form className="CreateRole" onSubmit={ event =>  event.preventDefault() } style={Flexbox.flexColumn}>
                <h3>Create a role &amp; send welcome email.</h3>
                <label>
                   Email: <input onChange={ event=>this.updateField(event) } type="text" name="email" />
                </label>
                <label>
                    Password: <input onChange={ event=> this.updateField(event) } type="text" value={this.state.password} name="password" /> 
                </label>

                <label> 
                   Display Name: <input onChange={ event=>this.updateField(event) } type="text" name="display_name" />
                </label>

                <label>
                  School: <input onChange={ event=>this.updateField(event) } type="text" name="school" />
                </label>

                <label>
                  Work Address: <input onChange={ event=>this.updateField(event) } type="text" name="work_address" />
                </label>

                <label>
                  Teaches: <input onChange={ event=>this.updateField(event) } type="text" name="teaches" />
                </label>

                <label>
                  Pay: <input onChange={ event=>this.updateField(event) } type="text" name="pay" />
                </label>
                
                <ButtonContainer style={Flexbox.flexRowCenter}>
                    <input type="submit" name="admin" value="Create Admin" onClick={ event=>this.createRole(event) }/>
                    <input type="submit" name="user" value="Create User" onClick={ event=>this.createRole(event) }/> 
                </ButtonContainer>
            </form>
        )
    }
}


export default CreateRole;