import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../redux/user/UserActoins'

 class UserContainer extends Component {
     componentDidMount(){
         console.log('component did mount')
         this.props.fetchuser()
     }

    render() {
        console.log(this.props.state)
        return (
            <div>
                <h1>user container {this.props.state.data.length}</h1>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        state:state
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        fetchuser:()=>dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
