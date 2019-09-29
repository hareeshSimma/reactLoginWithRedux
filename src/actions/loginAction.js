import store from '../store/store';
const loginAction=(data)=>{
    store.dispatch({
        'type':'LOGIN',
        'payload':data
    })
}

export default loginAction;