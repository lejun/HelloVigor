interface StateTwo{
    two:string;
}

const initState : StateTwo = {
    two:'goods'
};

export default function(state:StateTwo = initState,action):StateTwo
{
    switch(action.type)
    {
        case 'two':
        return {two:'goods-----result'};
        default:
        return state;
    }
}