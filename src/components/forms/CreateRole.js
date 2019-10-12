import React from 'react';
import { auth, functions} from '../../constants/firebase-roles'

class CreateRole extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }

    }

    createRole(event){
        event.preventDefault()

    }

    render(){
        return(
            <form onSubmit={(event)=>this.createRole(event)}>

                <input type="submit" value="Create Admin" />
                <input type="submit" value="Create User" />

            </form>
        )
    }
}


export default CreateRole;