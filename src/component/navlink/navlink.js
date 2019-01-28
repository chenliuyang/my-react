import React from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';

class NavLinkBar extends React.Component{
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    render () {
        const navList = this.props.data.filter(v => !v.hide)
        return (
            <TabBar>
                {navList.map(v=>(
                    <TabBar.Item
                        key={v.path}
                        title={v.text}
                        icon={{rui: require(`./img/${v.icon}.png`)}}
                    >

                    </TabBar.Item>
                ))}
            </TabBar>
        )
    }
}

export default NavLinkBar;