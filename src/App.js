import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable' //加载异步组件
import Login from './pages/login'
import Write from './pages/write'
import GlobalStyle from './style'
import GlobalIconStyle from './statics/iconfont/iconfont'

class App extends Component {
    render(){
        return (
            <Fragment>
                <GlobalStyle/> {/*全局样式*/}
                <GlobalIconStyle /> {/*全局图标样式*/}
                <Provider store={store}>
                    <div>
                        <BrowserRouter>
                            <Header />
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/detail/:id" exact component={Detail}></Route>
                            <Route path="/login" exact component={Login}></Route>
                            <Route path="/write" exact component={Write}></Route>
                        </BrowserRouter>
                    </div>
                </Provider>
            </Fragment>
        );
    }
}

export default App;
