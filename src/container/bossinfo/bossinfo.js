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
class BossInfo extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            avatar: '',
            title: '',
            company: '',
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
                <NavBar mode="dark" >BOSS完善信息页面</NavBar>
                <AvatarSelector selectAvatar={v => this.selectAvatar(v)}></AvatarSelector>
                <InputItem onChange={v => this.onChange('title', v)}>招聘职位</InputItem>
                <InputItem onChange={v => this.onChange('company', v)}>公司名称</InputItem>
                <InputItem onChange={v => this.onChange('money', v)}>职位薪资</InputItem>
                <TextareaItem title='职位要求' onChange={v => this.onChange('desc', v)} rows={3}></TextareaItem>
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

export default BossInfo;