import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
    RecommendWrapper,
    RecommendItem,
    InfoItem
} from '../style'

class Recommend extends Component {
    render(){
        const {recommendItems} = this.props
        return(
            <RecommendWrapper>
                {
                    recommendItems.toJS().map(item => (
                        <RecommendItem key={item.id} imgUrl={item.imgUrl}></RecommendItem>
                    ))
                }
                <InfoItem>
                    <img className="info-qrcode" alt="" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                    <div className="info">
                        <div className="title">
                            下载简书手机App
                            <i className="iconfont">&#xe63f;</i>
                        </div>
                        <div className="desc">
                            随时随地发现和创作内容
                        </div>
                    </div>
                </InfoItem>
            </RecommendWrapper>
        )
    }
}

//映射到组件的props
const mapStateToProps = (state)=>{
    return {
        recommendItems: state.getIn(['home', 'recommendItems']),
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Recommend);