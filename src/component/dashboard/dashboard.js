import React from 'react';
import { connect } from 'react-redux'
import BossInfo from "../../container/bossinfo/bossinfo";
import { NavBar } from 'antd-mobile';
import NavLinkBar from '../navlink/navlink'

function Boss() {
    return <h2>Boss首页</h2>
}

function Genius () {
    return <h2>牛人首页</h2>
}
function Msg () {
    return <h2>消息列表</h2>
}
function User () {
    return <h2>个人中心</h2>
}
@connect(
    state=>state
)

class Dashboard extends React.Component{
    constructor (props) {
        super(props)
    }



    render () {
        console.log(this.props.location);
        const pathname = this.props.location.pathname;
        const user = this.props.user;
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path: '/genius',
                text: 'BOSS',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }
        ]
        return (
            <div>
                <NavBar mode='dard' >{navList.find(v=>v.path===pathname).title}</NavBar>
                <h2>content</h2>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard;