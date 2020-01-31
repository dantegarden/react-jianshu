import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
//从js对象生成不可变对象，而且是深拷贝的不可变
const defaultState = fromJS({
    hasLogin: false,
    username: '',
    avatar: '',
    permissions: [],
});

//只会替换state.home
export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.LOGIN:
            return state.merge({
                'hasLogin': true,
                'username': action.username,
                'avatar': action.avatar,
                'permissions': action.permissions
            })
        case actionTypes.LOGOUT:
            return state.merge({
                'hasLogin': false,
                'username': '',
                'avatar': '',
                'permissions': []
            })
        default:
            return state;
    }
}