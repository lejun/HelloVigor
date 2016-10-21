import {createAction} from 'redux-actions';

export const HELLO = "nice";

export const HelloAction = createAction(HELLO);
// export const HelloAction = {
//     type:"nice",
//     content:'trello!!!!!'
// }