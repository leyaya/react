// App容器页面
import React, {Component} from 'react';
import '../css/home.css'

export default class HomeContainer extends Component {
    constructor(props) {
        console.log('HomeContainer的构造函数')
        super(props);
        this.state={};
    }

    render() {
        console.log('HomeContainer渲染')
        return (
           <div className="home_container">
               HomeContainer
           </div>
        );
    }
}

