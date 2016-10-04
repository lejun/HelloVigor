import {ACTION_ADD} from '../action/Action'

interface StateThree{
    todos:string[];
}

const initState :StateThree ={
    todos:['android','java',"c++++++"]
}

export default function three(state:StateThree = initState,action):StateThree
{
    switch(action.type)
    {
        case ACTION_ADD:
        console.log("----state: ",state);
        return Object.assign(state,action.content);

        default:
        return state;
    }
}