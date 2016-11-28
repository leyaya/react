// 在js中引入css文件
import './Hello.css';
// 在js中引入scss文件
import './Hello.scss';

import React, {Component} from 'react';

// 直接在js中定义样式，内嵌样式，样式要变为驼峰命名
let style = {
    backgroundColor: 'blue'
}

export default class Hello extends Component {

    render() {
        return (
            <div>
                <h1 style={style}>dfdhfhdjfhdfd 石国庆jdfkj </h1>
                <br/>
                <img/>
            </div>
        )
    }
}
