// App容器页面
import React, {Component} from 'react';
import {Link} from 'react-router'

import '../css/root.css'
import '../css/app.css'

export default class AppContainer extends Component {
    constructor(props) {
        console.log('AppContainer的构造函数')
        super(props);
        this.state = {};
    }

    render() {
        console.log('AppContainer渲染');
        return (
            <div className="app_container">
                <div className="app_header">
                    <Link to='/home'>首页</Link>
                    <Link to='/movie'>电影</Link>
                    <Link to='/music'>音乐</Link>
                    <Link to='/novel'>小说</Link>
                </div>
                <div className="app_content">
                    {/*这个就相当于在页面中挖的坑*/}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

