import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

class List extends Component {
    render(){
        const {articleItems, page, totalPage, getMoreList} = this.props
        return(
            <Fragment>
                {
                    articleItems.toJS().map(item => (
                        <Link key={item.id} to={'/detail/' + item.id}> {/*<Link key={item.id} to="/detail"> 静态路由 */}
                            <ListItem>
                                <img className="list-pic"
                                     alt="jianshu"
                                     src={item.imgUrl} />
                                <ListInfo>
                                    <h3 className="title">{item.title}</h3>
                                    <p className="desc">{item.desc}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }

                {
                    page === totalPage - 1 ? '': <LoadMore onClick={() => getMoreList(page) }>阅读更多</LoadMore>
                }

            </Fragment>
        )
    }

    componentDidMount(){
        this.props.initArticleItems()
    }
}


//映射到组件的props
const mapStateToProps = (state)=>{
    return {
        articleItems: state.getIn(['home', 'articleItems']),
        page: state.getIn(['home', 'articlePage']),
        totalPage: state.getIn(['home', 'articleTotalPage'])
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
        initArticleItems(){
            dispatch(actionCreators.getArticleItems(0)) //react-thunk允许dispatch一个函数，dispatch会执行该函数
        },
        getMoreList(page){
            dispatch(actionCreators.getArticleItems(page + 1))
        }
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(List);