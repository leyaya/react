// 路由模块
import React, {Component} from 'react';
import {Router, Route, IndexRoute,Redirect,hashHistory,browserHistory,createMemoryHistory} from 'react-router'

import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
import MovieContainer from '../containers/MovieContainer.js'
import MovieListContainer from '../containers/MovieListContainer.js'
import MovieDetailContainer from '../containers/MovieDetailContainer.js'

export default class MyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AppContainer}>
                    {/*给AppContainer的this.props.children赋初始值*/}
                    <IndexRoute component={MovieContainer}/>
                    <Route path="home" component={HomeContainer}/>
                    <Route path="movie" component={MovieContainer} onLeave={()=>{}} onEnter={()=>{}}>
                        {/*绝对路由的写法,可以直接访问/movieList不需要、movie/movieList*/}
                        {/*<Route path="/movieList" component={MovieListContainer}/>*/}
                        {/*兼容旧路由*/}
                        {/*<Redirect from="movieList" to="/movieList" />*/}
                        <Route path="movieList/:movieType" component={MovieListContainer}/>
                        <Route path="movieDetail/:id" component={MovieDetailContainer} />
                    </Route>
                    <Redirect from="*" to="/" />
                </Route>
            </Router>
        );
    }
}

