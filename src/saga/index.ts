import {takeEvery} from 'redux-saga';
import {put,call} from 'redux-saga/effects';
import {REQUESET, loadAction,showContentAction} from '../action/HelloAction';

export function * handler()
{
    //此 put ,可以理解为 dispatch
    //push load 效果
    yield put(loadAction());
    //请求服务
    const info = yield call(ApiServer._fetchZH,'lejun');   
    //请求完成
    yield put(showContentAction(info.msg));
    // yield put({type:'hello',payload:info.msg});
}

//此方法用于 监听 'nice' ,如果有传入，则调用 handler 生成器方法
export function * sagas()
{
    yield * takeEvery(REQUESET,handler);
}


const ApiServer = {
    _fetchZH(user){
    // return fetch(`https://api.github.com/users/${user}`)
    return fetch("http://news-at.zhihu.com/api/4/version/android/2.3.0")
    // lambal 表达式，没有语句块{} 则表示有返回值
    .then(result => result.json())
    .catch(error => error);
    } 
}
