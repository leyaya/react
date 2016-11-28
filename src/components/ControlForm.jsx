//dom操作demo
import React, { Component } from 'react';

class ControlForm1 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('另一个组件被渲染了')
        return (
            <div>
               input
            </div>
        );
    }
}



class ControlForm2 extends Component {
    state={
        userInput: ''
    }

    constructor(props) {
        super(props);
        //this.state={ userInput: '' };
    }

    handleChange(e) {
        // 方法一：用refs获取属性值
        console.log(this.refs.theInput1.value);
        let inputStr="";
        if(e.target.value.length>=8){
            inputStr=e.target.value.slice(0,5)+"...";
        }else{
            inputStr=e.target.value;
        }
        // 方法二：用事件参数获取属性值
        this.setState({ userInput:inputStr});
    }

    clearAndFocusInput() {
        // 第一个参数是你要从新赋值的state，第二个参数一个回调函数
        this.setState({ userInput: '' }, () => {
            this.refs.theInput.focus();
        });
    }

    render() {
        return (
            <div>
                <ControlForm1></ControlForm1>
                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to Focus and Reset
                </div>
                {/*受控表单组件改变输入框的写法*/}
                <input
                    ref="theInput1"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
                <br/>
                {/*受控表单组件写死了value值，永远不会改变了*/}
                <input
                    ref="theInput"
                    value='shiguoqing'
                />
                <br/>
                {/*非受控表单组件它里面输入框值的改变不被react控制*/}
                <input
                    ref="theInput"
                />
            </div>
        );
    }
}

export default class ControlForm extends Component {

    constructor(props) {
        super(props);
        //this.state={ userInput: '' };
    }

    render() {
        return (
            <div>
                <ControlForm1></ControlForm1>
                <ControlForm2></ControlForm2>
            </div>
        );
    }
}

