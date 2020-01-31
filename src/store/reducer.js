import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'

//组合所有模块的reducer，拼成一个大而全的reducer
//redux-immutable的combineReducers和redux的combineReducers一样，但可以返回不可变的state对象
export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})
