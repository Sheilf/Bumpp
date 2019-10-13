import React from 'react';
import { View } from '../../containers/views';
import CreateRole from '../forms/CreateRole';
import { auth } from '../../constants/firebase-roles';
import { checkPrivileges } from '../../services/auth_services';
import '../../firebase-config';

class Master extends React.Component{
    constructor(props){
        super(props);
        this.state={
            valid: false
        }

    }

    componentDidMount(){
        //determine role by claim: badclaim = "Bad claim, go back"  
        auth.onAuthStateChanged(async user=>{
            
            if(user){
                const role = this.props.history.location.pathname.substr(1)
                console.log("LOC", role)
                if(await checkPrivileges(user, role)){
                   this.setState({
                        valid: true
                    })
                }else{
                    this.setState({valid: false})
                }

            }

        })
    }
    render(){
        console.log(this.state.valid)
        if(this.state.valid == false){
            return(
                <View>
                    You do not have access to view this.
                </View>
            )
        }
        return(
            <View>  
                <CreateRole />
            </View>
        )
    }
}

export default Master;



/*
<AddUser>
<CreateAdmin>




*/