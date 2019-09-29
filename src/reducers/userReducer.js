import {initVal} from '../utils/init';
const userReducer=(state=initVal,dispatchData)=>{
        if(dispatchData.type==='LOGIN'){
            state={
                ...state,
                isLoggedIn:dispatchData.payload
            }
        }
        return state;
}

export default userReducer;