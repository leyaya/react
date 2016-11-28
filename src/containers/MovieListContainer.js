import React, {Component} from 'react';
import service from '../services/movieService.js'
// import {Link,hashHistory} from 'react-router'
import '../css/movieList.css'

export default class MovieListContainer extends Component {
    constructor(props, context) {
        console.log('MovieListContainer的构造函数')
        super(props, context);
        this.state = {
            // 显示遮罩
            isLoading:true,
            // 请求回来的数据对象
            movieListObj:{},
            // 电影列表数据
            movieListData: [],
            message:{
                movieType:'in_theaters',
                start:0,
                count:10,
                pageIndex:1
            }
        }
    }


    static contextTypes = {
        router: React.PropTypes.object
    };


    componentWillReceiveProps(nextProps){
        this.setState({
            message:{
                movieType:nextProps.params.movieType
            }
        })
        this.fetchData(nextProps.params.movieType)
    }

    componentDidMount() {
        this.fetchData(this.state.message.movieType)
        // 给列表添加滚动监听事件

    }

    componentDidUpdate(){
        if(!this.state.isLoading){
            this.addScrollEventListener()
        }

    }

    // 列表的滚动监听事件
    addScrollEventListener=()=>{
        const _this=this
        this.refs.scrollContent.addEventListener('scroll',function (e) {
            console.log('触发了监听事件了')
            if(e.target.scrollHeight==e.target.scrollTop+e.target.offsetHeight){
                _this.fetchData(_this.state.message.movieType)
            }
        })
    }

    // 请求电影列表数据
    fetchData=(movieType)=>{
        // 改变this指针作用域
        let _this=this
        // 定义一个新的接受数据的空数组，一会给state从新赋值用
        let movieListData=Object.assign([],this.state.movieListData)

        // ES6的硬拷贝方法
        // 0    1
        // 10   2
        // 20   3



        console.log('G000000000000000000000000000000')
        console.log(this.state.message.pageIndex)
        console.log(this.state.message.count)
        // 定义分页信息，start和pageindex
        let start=(parseInt(this.state.message.pageIndex)-1)*parseInt(this.state.message.count)
        let pageIndex=this.state.message.pageIndex++

        console.log(start)
        console.log(pageIndex)
        // 硬拷贝state.message的数据，并且赋值最新的分页数据，单不会改变state
        let message=Object.assign({},this.state.message,{movieType:movieType,start:start})
        console.log(message)

        // 这个判断里面的东西大部分时间不会执行，只有在类型变化的时候才会执行一次
        // 为什么要进行这个判断那？因为组件没有被卸载
        // 在真正的要发起数据请求的时候进行movieType类型是否发生改变的判断
        // 如果类型发生改变了，那么我们应该把message对象中的start变为0，pageIndex变为2
        if(movieType!=this.state.message.movieType){
            // 数据变为空数据
            movieListData=[]
            message.start=0
            message.pageIndex=2
            console.log('类型发生变化了')
            this.setState({
                // 显示遮罩
                isLoading:true,
                // 请求回来的数据对象
                movieListObj:{},
                // 电影列表数据
                movieListData: [],
                message:{
                    movieType:movieType,
                    start:0,
                    count:10,
                    pageIndex:1
                }
            })
            return;

        }
console.log('我继续走')

        // 把硬拷贝的对象变为字符串，并传提到service中
        let newMessage=JSON.stringify(message)
        // 开始请求数据
        const promise = service.getMovieListData(newMessage);
        promise.then(
            function (data) {

                // 如果state.movieListData的length>0,证明这是加载更多的数据
                if(movieListData.length>0){
                    // 把加载更多获取的数据和之前的数据进行拼接
                    movieListData=movieListData.concat(data.subjects)
                }else {
                    // 如果state.movieListData的length=0、证明这是第一页数据
                    movieListData=data.subjects
                }
                // 从新为state赋值，渲染新的页面
                _this.setState({
                    // 关闭加载器
                    isLoading:false,
                    // 请求回来的数据对象没有变化赋值给这个属性
                    movieListObj:data,
                    // 操作之后的数据赋值给这个属性
                    movieListData:movieListData,
                    // 把硬拷贝出来的行的东西赋值给message
                    message:message
                })


            },
            function (err) {

            }
        )
    }

    // 跳转到详细页面
    goDetail=(id)=>{
        this.context.router.push(`/movie/movieDetail/${id}`)
    }


    // 循环创建列表中的每一项
    createMovieList =(item)=>{
        return (
            <div className="movieList_item" key={Math.random()} onClick={()=>this.goDetail(item.id)}>
                <img className="movieList_left" src={item.images.medium} alt=""/>
                <div className="movieList_right">
                    <span>{item.title}</span>
                    <span>{item.year}</span>
                </div>
            </div>
        )
    };

    // 显示遮罩层
    showLoading=()=>{
        return (
            <p>正在加载。。。。</p>
        );
    }

    render() {
        console.log('MoveListContainer渲染')
        // 遮罩显示的判断条件
        if(this.state.isLoading){
            return (
                <div className="movieList_container">{this.showLoading()}</div>
            )
        }
        return <div className="movieList_container" ref="scrollContent">{this.state.movieListData.map(this.createMovieList)}</div>;
    }
}


