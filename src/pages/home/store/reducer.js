import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
//从js对象生成不可变对象，而且是深拷贝的不可变
const defaultState = fromJS({
    topicItems: [],
    articleItems: [],
    articlePage: 0,
    articleTotalPage: 1,
    recommendItems: [
        {id: 1, imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"},
        {id: 2, imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"},
        {id: 3, imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"},
        {id: 4, imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"}
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