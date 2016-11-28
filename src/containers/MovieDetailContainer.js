// detail页面
import React, {Component} from 'react';
import service from '../services/movieService.js'
import '../css/movieDetail.css'

export default class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading:true,
            movieDetailData:{}
        };
    }


    static contextTypes = {
        router: React.PropTypes.object
    };

    componentDidMount() {
        this.fetchData(this.props.params.id)
    }

    // 请求电影详细数据
    fetchData=(id)=>{

        // 请求数据操作
        let _this=this
        const promise = service.getMovieDetailData(id);
        promise.then(
            function (data) {
                console.log(1111111111111111111111)
                console.log(data)
                _this.setState({
                    // 显示遮罩
                    isLoading:false,
                    movieDetailData:data
                })
            },
            function (err) {

            }
        )
    }

    // 跳回前一个路由
    goBack=()=>{
        this.context.router.goBack()
    }

    // 显示遮罩层
    showLoading=()=>{
        return (
            <p>正在加载。。。。</p>
        );
    }

    render() {
        console.log(this.state.movieDetailData)
        if(this.state.isLoading){
            return (
                <div>{this.showLoading()}</div>
            )
        }
        return (
            <div className="movieDetail_container">
                <div className="movieDetail_back" onClick={()=>this.goBack()}>
                    返回
                </div>
                <div className="movieDetail_content">
                    <img src={this.state.movieDetailData.images.large} alt=""/>
                    <h1>{this.state.movieDetailData.title}</h1>
                    <p>{this.state.movieDetailData.summary}</p>
                </div>
            </div>

        );
    }
}

