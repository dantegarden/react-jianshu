import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
//从js对象生成不可变对象，而且是深拷贝的不可变
const defaultState = fromJS({
    title: "",
    content: ""
});

//只会替换state.detail
export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.SET_DETAIL:
            return state.merge({
                'title': action.title,
                'content': action.content
            })
        default:
            return state;
    }
}