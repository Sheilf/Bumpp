import React from 'react';
import { View } from '../../containers/views';
import { auth } from '../../constants/firebase-roles';
import { checkPrivileges } from '../../services/auth_services';
import { BadPrivilege, Loading } from './Preloaders';
import '../../firebase-config';

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            valid: "Loading"
        }

    }
    componentDidMount(){
        auth.onAuthStateChanged(async user=>{       
            if(user){
                const role = this.props.history.location.pathname.substr(1)
                this.setState({
                    valid: await checkPrivileges(user, role)
                })

            }
        })
    }

    render(){
        return (
            this.state.valid === "Loading" ? (<View><Loading /></View>)
            :
            this.state.valid === false ? (
                <View>
                    <BadPrivilege />
                </View>
            )
            :
            (
                <View>  
                    Admin Page
                </View>
            )
        )
    }
}

export default Admin;