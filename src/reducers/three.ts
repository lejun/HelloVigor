import {ACTION_ADD,ACTION_DEL} from '../action/Action'

interface StateThree{
    todos:string[];
}

const initState :StateThree ={
    todos:['android','java',"c++++++"]
}

export default function three(state:StateThree = initState,action:ReduxActions.Action<string>):StateThree
{
    switch(action.type)
    {
        case ACTION_ADD:
        console.log("----state: ",state);
        return Object.assign({},state,{todos:[action.payload,...state.todos]});
        case ACTION_DEL:
        console.log("-----del**",state);
        return Object.assign({},state,{});
        default:
        return state;
    }
}