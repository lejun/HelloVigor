import {createAction} from 'redux-actions';

export const HELLO = "nice";

export const HelloAction = createAction(HELLO);
export const REQUESET = 'request';
export const LOADING = 'loading';
export const USER = 'user';

//请求action
export const requestAction = createAction(REQUESET);
//加载效果action
export const loadAction = createAction(LOADING);
/** 显示内容action*/
export const showContentAction = createAction(USER,msg => msg);