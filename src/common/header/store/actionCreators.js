import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios';

export const searchFoucus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const changeSearchItems = (data) => ({
    type: actionTypes.CHANGE_SEARCH_ITEMS,
    searchItems: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

//redux-thunk 允许返回一个函数，dispatch(getSearchItems)时函数会被执行
export const getSearchItems = () => {
    return (dispatch) => {
        axios.get('/api/searchItems.json').then((res)=>{
            const data = res.data
            dispatch(changeSearchItems(data.data))
        }).catch((err)=>{
            console.error(err)
        })
    }
}

export const changeSearchItemsPage = (nextPage) => ({
    type: actionTypes.CHANGE_SEARCH_ITEMS_PAGE,
    nextPage
})