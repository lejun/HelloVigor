import {takeEvery} from 'redux-saga';
import {put,call} from 'redux-saga/effects';

export function * handler()
{
    //此 put ,可以理解为 dispatch
    yield put({type:'hello',content:'ni-----'});
}

//此方法用于 监听 'nice' ,如果有传入，则调用 handler 生成器方法
export function * sagas()
{
    yield * takeEvery("nice",handler);
}