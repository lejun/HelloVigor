import {HELLO} from '../action/HelloAction';
import * as Redux from 'redux';
const {combineReducers} = Redux;

interface IState{
    content:string;
}
const initState:IState = {
    content:'init --- content'
}
export function helloHandler(state:IState = initState,action:ReduxActions.Action<string>):IState{
    switch(action.type)
    {
        case HELLO:
            return Object.assign({},state,{content:action.payload});
        default:
        return state;
    }

}

export default combineReducers({helloHandler});
