import React from 'react';
import Logo from '../../component/logo/logo';
import { Redirect } from 'react-router-dom';
import { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';

@connect(
    state=>state.user,
    { login }
)
class Login extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
    }
    register () {
        console.log(this.props);
        this.props.history.push('/register')
    }
    handleLogin () {
        console.log(this.props);
        this.props.login(this.state);
    }
    handleChange (key, val) {
        this.setState({
            [key]: val
        })
    }
    render(){
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <h2>我是登陆页面</h2>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                            onChange={v=>this.handleChange('pwd', v)}
                            type='password'
                        >密码</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.handleLogin} type='primary'>登陆</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;