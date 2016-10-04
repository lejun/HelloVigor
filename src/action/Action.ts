import {createAction} from 'redux-actions';
export const ACTION_ADD = "action_add";
export const ACTION_DEL = "action_del";

export let addAction = createAction(ACTION_ADD,txt => txt);

export let delAction = createAction(ACTION_DEL,position => position);

