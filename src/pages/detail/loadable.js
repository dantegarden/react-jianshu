import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'), //异步加载当前目录的index.js
    loading() {
        return <div>正在加载</div>
    },
});

export default () => <LoadableComponent/> //返回无状态组件