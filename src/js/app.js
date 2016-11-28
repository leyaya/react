// 项目入口文件
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MyRouter from './router.js'

ReactDOM.render(
    <div>
        <MyRouter/>
    </div>,
    document.getElementById('app')
);
