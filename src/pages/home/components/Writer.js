import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
    WriterWrapper,
    WriterTitle,
    WriterSwitch,
    WriterInfoList,
    WriterInfoItem
} from '../style'

class Writer extends Component {
    render(){
        const { handleChangePage, page, totalPage } = this.props
        return(
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>  {/**/}
                        <i ref={(icon)=>{this.spinIcon = icon}}
                           className="iconfont spin">&#xe851;</i>
                        换一批
                    </WriterSwitch>
                </WriterTitle>
                {this.getWriteInfoList()}
            </WriterWrapper>
        )
    }

    getWriteInfoList(){
        const {writerItems, page, totalPage} = this.props
        const pageItems = writerItems.toJS().slice(page * 5, page * 5 + 5)
        return (
            <WriterInfoList>
                {
                    pageItems.map(item => (
                        <WriterInfoItem key={item.id}>
                            <a className="avatar">
                                <img alt="" src={item.avatar} />
                            </a>
                            <a className="follow">
                                +关注
                            </a>
                            <a className="name">
                                {item.name}
                            </a>
                            <p>
                                写了{item.writenum}字 · {item.likenum}喜欢
                            </p>
                        </WriterInfoItem>
                    ))
                }
            </WriterInfoList>
        )
    }

    componentDidMount(){
        this.props.initWriterItems()
    }
}

//映射到组件的props
const mapStateToProps = (state)=>{
    return {
        writerItems: state.getIn(['home', 'writerItems']),
        page: state.getIn(['home', 'writerPage']),
        totalPage: state.getIn(['home', 'writerTotalPage'])
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
        initWriterItems(){
            dispatch(actionCreators.getWriterItems()) //react-thunk允许dispatch一个函数，dispatch会执行该函数
        },
        handleChangePage(page ,totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle = parseInt(originAngle, 10); //10进制数字+360度
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)'
            //翻页
            let nextPage = page + 1
            nextPage = nextPage === totalPage ? 0 : nextPage
            dispatch(actionCreators.changeWriterItemsPage(nextPage))
        }
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Writer);