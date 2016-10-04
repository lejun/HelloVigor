import {createAction} from 'redux-actions';
export const ACTION_ADD = "action_add";

export let addAction = createAction(ACTION_ADD,txt => txt);

