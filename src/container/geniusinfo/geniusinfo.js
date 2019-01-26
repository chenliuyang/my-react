import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux';
import { update } from '../../redux/user.redux';

@connect(
    state => state.user,
    {update}
)
class GeniusInfo extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            avatar: '',
            title: '',
            money: '',
            desc: ''
        }
    }
    onChange (key, val) {
        this.setState({
            [key]: val
        })
    }
    selectAvatar (imgname) {
        this.setState({
            avatar: imgname
        })
    }
    render() {
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return (
            <div>
                {redirect&&redirect!==path ? <Redirect to={this.props.redirectTo} />: null}
                <NavBar mode="dark" >牛人完善信息页面</NavBar>
                <AvatarSelector selectAvatar={v => this.selectAvatar(v)}></AvatarSelector>
                <TextareaItem title='个人简介' onChange={v => this.onChange('desc', v)} rows={3}></TextareaItem>
                <Button
                    onClick={() => {
                        this.props.update(this.state)
                    }}
                    type='primary'
                >保存</Button>
            </div>
        )
    }
}

export default GeniusInfo;