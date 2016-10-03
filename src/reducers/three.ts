

interface StateThree{
    name:string[];
}

const initState :StateThree ={
    name:['android','java']
}

export default function three(state:StateThree = initState,action):StateThree
{
    switch(action.type)
    {
        case 'one':
        return state;
        default:
        return state;
    }
}