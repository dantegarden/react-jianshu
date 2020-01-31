import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style.js'

class Home extends Component {
    constructor(props){
        super(props);
        this.handleScrollTop = this.handleScrollTop.bind(this);
    }
    render(){
        const {showBackToTop} = this.props
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580323030600&di=9ee464c86fd6171f60ad7510f5c77503&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F04%2F29%2F97%2F2258401eafb4793.jpg" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showBackToTop ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : ''
                }
            </HomeWrapper>
        )
    }

    componentDidMount(){
        window.addEventListener('scroll', this.props.changeShowBackToTop)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeShowBackToTop) //销毁时移除事件
    }

    handleScrollTop(e){
        window.scrollTo(0,0);
    }
}

const mapStateToProps = (state)=>{
    return {
        showBackToTop: state.getIn(['home', 'showBackToTop']),
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
        changeShowBackToTop(e){
            if(document.documentElement.scrollTop > 400){
                dispatch(actionCreators.toggleShowBackToTop(true))
            }else{
                dispatch(actionCreators.toggleShowBackToTop(false))
            }
        }
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Home);