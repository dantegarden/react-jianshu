import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style.js'

class Login extends Component {
    render(){
        const { hasLogin, loginByUsernameAndPassword } = this.props
        if(!hasLogin) {
            // 没登录
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="用户名" ref={(input) => {
                            this.usernameElm = input
                        }}/>
                        <Input placeholder="密码" type="password" ref={(input) => {
                            this.passwordElm = input
                        }}/>
                        <Button
                            onClick={() => loginByUsernameAndPassword(this.usernameElm, this.passwordElm)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        hasLogin: state.getIn(['login', 'hasLogin'])
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
        loginByUsernameAndPassword(usernameElm, passwordElm){
            console.log(usernameElm, passwordElm)
            dispatch(actionCreators.authenticate(usernameElm.value, passwordElm.value))
        }
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Login);