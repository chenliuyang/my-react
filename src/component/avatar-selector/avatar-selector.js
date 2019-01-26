import React from 'react';
import { Grid, List } from 'antd-mobile';
import PropsTypes from 'prop-types';

class AvatarSelector extends React.Component{
    static propTypes = {
        selectAvstar: PropsTypes.func
    }
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render () {
        const avatarList = 'boy1,girl1,boy2,girl2,boy3,girl3,boy4,girl4,boy5,girl5,boy6,girl6,boy7,girl7,hema,pig'
            .split(',')
            .map(v => ({
                icon: require(`../img/${v}.png`),
                text: v
            }));
        const gridHeader = this.state.text ? (
            <div>
            <span>已选择头像</span>
                <img style={{width:20}} src={this.state.icon} alt=""/>
            </div>
        ) : <div>请选择头像</div>;
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid data={avatarList}
                          onClick={ele => {
                              this.setState(ele)
                              this.props.selectAvatar(ele.text)
                          }}
                    ></Grid>
                </List>

                头像选择
            </div>
        )
    }
}

export default AvatarSelector;

