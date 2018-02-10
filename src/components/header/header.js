import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <Menu borderless color='teal' size='mini' className='component-header-menu'>
        <Menu.Item as='a' active>首页</Menu.Item>
        <Menu.Item as='a'>项目</Menu.Item>
        <Menu.Item as='a'>联系我们 </Menu.Item>
        <Menu.Item as='a'>关于</Menu.Item>
        <Menu.Item position='right'>
          <Button as='a'>登录</Button>
          <Button as='a' primary={true} style={{marginLeft: '0.5em'}}>注册</Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;