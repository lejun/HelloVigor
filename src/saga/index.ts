import {takeEvery} from 'redux-saga';
import {put,call} from 'redux-saga/effects';

export function * handler()
{
    //此 put ,可以理解为 dispatch
    const info = yield call(ApiServer._fetchZH,'lejun');
    yield put({type:'hello',content:info});
}

//此方法用于 监听 'nice' ,如果有传入，则调用 handler 生成器方法
export function * sagas()
{
    yield * takeEvery("nice",handler);
}

const ApiServer = {
    _fetchZH(user){
    return fetch(`https://api.github.com/users/${user}`)
    .then(result => {
        console.log("------((((((---",result.json());
        result.json()
    }).catch(error => error);
    } 
}
