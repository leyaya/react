// App容器页面
import React, {Component} from 'react';
import {Link} from 'react-router'
import '../css/movie.css'
import MovieListContainer from './MovieListContainer.js'

export default class MovieContainer extends Component {
    constructor(props) {
        console.log('MovieContainer的构造函数')
        super(props);
        this.state={
            movieType:'in_theaters'
        };
    }

    // 用context特性进行页面跳转
    static contextTypes={
        router: React.PropTypes.object
    };


    changeMovieType=(movieType)=>{
        this.setState({
            movieType:movieType
        })
        this.context.router.push(`/movie/movieList/${movieType}`)
    }

    render() {
        console.log('MovieContainer渲染')
        return (
           <div className="movie_container">
               <div className="movie_nav">
                   <a className={this.state.movieType=='in_theaters'?'movie_current':''} onClick={()=>this.changeMovieType('in_theaters')}>正在热映</a>
                   <a className={this.state.movieType=='coming_soon'?'movie_current':''} onClick={()=>this.changeMovieType('coming_soon')}>即将上映</a>
                   <a className={this.state.movieType=='top250'?'movie_current':''} onClick={()=>this.changeMovieType('top250')}>Top250</a>
               </div>
               <div className="movie_areas">
                   <div className="movie_map">
                       <span>正在热映</span>
                       <div>
                           <input type="text"/>
                           <button>搜索</button>
                       </div>
                   </div>
                   <div className="movie_content">
                      {this.props.children?this.props.children:<MovieListContainer/>}
                   </div>

               </div>
           </div>
        );
    }
}

