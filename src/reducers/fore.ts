interface StateFore{
    two:string;
}

const initState : StateFore = {
    two:'goods'
};

export default function fore(state:StateFore = initState,action):StateFore
{
    switch(action.type)
    {
        case 'two':
        return {two:'goods-----result'};
        default:
        return state;
    }
}