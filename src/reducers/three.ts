

interface StateThree{
    name:string;
}

const initState :StateThree ={
    name:'ly'
}

export default function three(state:StateThree = initState,action):StateThree
{
    switch(action.type)
    {
        case 'one':
        return {name:'nice'};
        default:
        return state;
    }
}