import axios from 'axios'
import {FETCH_REQUEST, SUCCESS_RESP, FAIL_RESP} from './UserConstants'

const fetchRequest = ()=>{
    return{
        data:[],
        error:'',
        type:FETCH_REQUEST
    }
}

const successResp = (resp)=>{
    return{
        data:resp.data,
        error:'',
        type:SUCCESS_RESP
    }
}

const failResp = (error)=>{
    return{
        data:[],
        error:error,
        type:FAIL_RESP
    }
}


export const fetchUser = ()=>{
    return(dispatch)=>{
        dispatch(fetchRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            dispatch(successResp(response))
        })
        .catch(error=>{
            dispatch(failResp(error.error))
        })
    }
}