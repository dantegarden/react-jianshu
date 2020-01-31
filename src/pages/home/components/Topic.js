import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
    TopicWrapper,
    TopicItem
} from '../style'

class Topic extends Component {
    render(){
        return(
            <TopicWrapper>
                { this.getTopicList() }
            </TopicWrapper>
        )
    }

    getTopicList(){
        const { topicItems } = this.props
        return(
            <Fragment>
                {topicItems.toJS().map(item => (
                    <TopicItem key={item.id}>
                        <img className="topic-img"
                             alt="jianshu"
                             src={item.imgUrl} />
                        {item.title}
                    </TopicItem>
                ))}
            </Fragment>
        )
    }

    componentDidMount(){
        this.props.initTopicItems(); //加载topic列表
    }
}

//映射到组件的props
const mapStateToProps = (state)=>{
    return {
        topicItems: state.getIn(['home', 'topicItems']),
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
        initTopicItems(){
            dispatch(actionCreators.getTopicItems()) //react-thunk允许dispatch一个函数，dispatch会执行该函数
        },
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Topic);