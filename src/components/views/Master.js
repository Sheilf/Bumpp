import React from 'react';
import { View } from '../../containers/views';
import CreateRole from '../../components/forms/CreateRole';
import '../../firebase-config';

class Master extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }

    }

    componentDidMount(){
        //determine role by claim: badclaim = "Bad claim, go back"  
    }
    render(){
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