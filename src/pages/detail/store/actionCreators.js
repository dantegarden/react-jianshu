import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios';

export const setDetail = (detail) => ({
    type: actionTypes.SET_DETAIL,
    title: detail.title,
    content: detail.content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res)=>{
            const data = res.data
            dispatch(setDetail(data.data))
        }).catch((err)=>{
            console.error(err)
        })
    }
}