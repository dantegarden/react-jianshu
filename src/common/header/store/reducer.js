import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
//从js对象生成不可变对象，而且是深拷贝的不可变
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    searchItems: [],
    page: 0,
    totalPage: 1
});

//只会替换state.header
export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true)  //immutable的set方法会结合新值和老值，返回一个全新的对象
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false)  //immutable的set方法会结合新值和老值，返回一个全新的对象
        case  actionTypes.CHANGE_SEARCH_ITEMS:
            return state.merge({               //改变多个属性
                searchItems: action.searchItems,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actionTypes.CHANGE_SEARCH_ITEMS_PAGE: {
            return state.set('page', action.nextPage)
        }
        default:
            return state;
    }
}