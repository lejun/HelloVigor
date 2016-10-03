

interface StateOne{
    name:string;
}

const initState :StateOne ={
    name:'ly'
}

export default function(state:StateOne = initState,action):StateOne
{
    switch(action.type)
    {
        case 'one':
        return {name:'nice'};
        default:
        return state;
    }
}