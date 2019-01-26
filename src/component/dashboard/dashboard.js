import React from 'react';
import { connect } from 'react-redux'
// import {  } from 'antd-mobile';

@connect(
    state=>state
)
class Dashboard extends React.Component{
    constructor (props) {
        super(props)
    }



    render () {
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '老板',
                icon: 'boss',
                title: '老板列表'
            },
            {
                path: '/genius',
                text: '牛人',
                icon: 'genius',
                title: '牛人列表'
            }
        ]
        return (
            <div>
                <header></header>
                <h2>Dashboard</h2>
                <footer></footer>
            </div>
        )
    }
}

export default Dashboard;