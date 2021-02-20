
import {FETCH_REQUEST, SUCCESS_RESP, FAIL_RESP} from './UserConstants'

const initState = {
    data:[],
    error:''
}

export const userReducer = (state = initState, actions)=>{
    switch(actions.type){
        case FETCH_REQUEST:
            console.log(actions)
        return {data:[], error:""}

        case SUCCESS_RESP:
            console.log(actions)
        return {data:actions.data, error:""}

        case FAIL_RESP:
            console.log(actions)
        return {data:[], error:actions.error}

        default:
            return state
    }
}