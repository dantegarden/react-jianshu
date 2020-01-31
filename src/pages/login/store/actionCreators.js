import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios';

export const login = (userInfo) => ({
    type: actionTypes.LOGIN,
    username: userInfo.username,
    avatar: userInfo.avatar,
    permissions: userInfo.permissions
})

export const logout = () => ({
    type: actionTypes.LOGOUT
})

export const authenticate = (username, password) => {
    return (dispatch) => {
        // axios.post('/api/login.json', {
        //     username,
        //     password
        // })
        axios.get('/api/login.json?username=' + username + "&password=" + password).then((res)=>{
            const data = res.data
            if(data.data){
                dispatch(login(data.data))
            }else{
                alert("登录失败")
            }
        }).catch((err)=>{
            console.error(err)
        })
    }
}
