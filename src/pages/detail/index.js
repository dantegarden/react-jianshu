import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import {
    DetailWrapper,
    DetailHeader,
    DetailContent
} from './style'

class Detail extends PureComponent {
    render(){
        console.log(this.props) //match里保存着路由参数
        const {title, content} = this.props
        return(
            <DetailWrapper>
                <DetailHeader>{title}</DetailHeader>
                <DetailContent dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}


const mapStateToProps = (state)=>{
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
        getDetail(id){
            dispatch(actionCreators.getDetail(id));  //非异步加载，可以获取路由参数
            //异步加载，无法获取路由参数，需要withRouter
        }
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(withRouter(Detail));