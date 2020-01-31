import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios';

export const toggleShowBackToTop = (isShow) => ({
    type: actionTypes.TOGGLE_SHOW_BACK_TO_TOP,
    isShow: isShow
})

export const updateTopicItems = (topicItems) => {
    return {
        type: actionTypes.UPDATE_TOPIC_ITEMS,
        topicItems: fromJS(topicItems)
    }
}

export const updateArticleItems = (pageItems, page, totalPage) => {
    return {
        type: actionTypes.UPDATE_ARTICLE_ITEMS,
        articleItems: pageItems,
        articlePage: page,
        articleTotalPage: totalPage
    }
}

export const updateWriterItems = (writerItems) => {
    return {
        type: actionTypes.UPDATE_WRITER_ITEMS,
        writerItems: fromJS(writerItems)
    }
}

export const getTopicItems = () => {
    return (dispatch) => {
        axios.get('/api/topicItems.json').then((res)=>{
            const data = res.data
            dispatch(updateTopicItems(data.data))
        }).catch((err)=>{
            console.error(err)
        })
    }
}

export const getArticleItems = (page) => {
    return (dispatch) => {
        axios.get('/api/articleItems.json?page=' + page).then((res)=>{
            const data = res.data
            const pageItems = data.data.slice(page*5, (page+1)*5)
            const totalPage = Math.ceil(data.data.length/5)
            dispatch(updateArticleItems(pageItems, page, totalPage))
        }).catch((err)=>{
            console.error(err)
        })
    }
}

export const getWriterItems = () => {
    return (dispatch) => {
        axios.get('/api/writerItems.json').then((res)=>{
            const data = res.data
            dispatch(updateWriterItems(data.data))
        }).catch((err)=>{
            console.error(err)
        })
    }
}

export const changeWriterItemsPage = (nextPage) => ({
    type: actionTypes.CHANGE_WRITER_ITEMS_PAGE,
    nextPage
})
