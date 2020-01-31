import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'

class Header extends Component {
    render(){
        const { hasLogin, focused, searchItems, handleInputFocus, handleInputBlur, logout } = this.props;
        return(
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <Link to="/">
                        <NavItem className='left active'>首页</NavItem>
                    </Link>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        hasLogin? <NavItem className='right' onClick={logout}>退出</NavItem> : (
                                <Link to='/login'>
                                    <NavItem className='right'>登录</NavItem>
                                </Link>
                            )
                    }
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch className={focused ? 'focused': ''}
                                       placeholder='搜索'
                                       onFocus={() => handleInputFocus(searchItems)}
                                       onBlur={handleInputBlur} />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe60c;</i>
                        {this.getSearchInfoArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe6e5;</i>
                        写文章
                    </Button>
                    <Button className='register'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getSearchInfoArea(){
        const {
            focused, mouseIn, searchItems, page, totalPage,
            handleMouseEnter, handleMouseLeave, handleChangePage
        } = this.props
        const pageItems = searchItems.toJS().slice(page * 10, page * 10 + 10) //immutable数组searchItems要用toJS来转换为普通js数组，分页
        if(focused || mouseIn) {
            return(
                <SearchInfo onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon = icon}}
                               className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageItems.map((item) => {
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}

//映射到组件的props
const mapStateToProps = (state)=>{
    return {
        focused: state.getIn(['header', 'focused']), //等价于state.get('header').get('focused')
        mouseIn: state.getIn(['header', 'mouseIn']),
        searchItems: state.getIn(['header', 'searchItems']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        hasLogin: state.getIn(['login', 'hasLogin'])
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(searchItems){
            searchItems.size === 0 && dispatch(actionCreators.getSearchItems()) //react-thunk允许dispatch一个函数，dispatch会执行该函数
            dispatch(actionCreators.searchFoucus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page ,totalPage, spin){
            //图标旋转
            console.log(spin)
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
            dispatch(actionCreators.changeSearchItemsPage(nextPage))
        },
        logout(){
            console.log("logout")
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Header);