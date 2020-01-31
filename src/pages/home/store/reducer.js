import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
//从js对象生成不可变对象，而且是深拷贝的不可变
const defaultState = fromJS({
    topicItems: [],
    articleItems: [],
    articlePage: 0,
    articleTotalPage: 1,
    recommendItems: [
        {id: 1, imgUrl: "/img/recommend1.png"},
        {id: 2, imgUrl: "/img/recommend2.png"},
        {id: 3, imgUrl: "/img/recommend3.png"},
        {id: 4, imgUrl: "/img/recommend4.png"}
    ],
    writerItems: [],
    writerPage: 0,
    writerTotalPage: 1,
    showBackToTop: false
});

//只会替换state.home
export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.UPDATE_TOPIC_ITEMS:
            return state.set('topicItems', action.topicItems)
        case actionTypes.UPDATE_ARTICLE_ITEMS: {
            const articleItems = state.get('articleItems').toJS().concat(action.articleItems)
            return state.merge({
                'articleItems': fromJS(articleItems),
                'articlePage': action.articlePage,
                'articleTotalPage': action.articleTotalPage
            })
        }
        case actionTypes.UPDATE_WRITER_ITEMS:
            return state.merge({
                'writerItems': action.writerItems,
                'writerTotalPage': Math.ceil(action.writerItems.size/ 5)
            })
        case actionTypes.CHANGE_WRITER_ITEMS_PAGE:
            return state.set('writerPage', action.nextPage)
        case actionTypes.TOGGLE_SHOW_BACK_TO_TOP:
            return state.set('showBackToTop', action.isShow)
        default:
            return state;
    }
}