import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../css/mystyle.css'
class Head extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
 
  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
      <div className="Head">
       <Menu   className='Head'
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <div className='lgog'>XMall后台管理系统 v1.1</div>
        <Menu.Item key="mail" className='ziti'>  
          <Icon type="plus"  className='ziti'/>新增   <Icon type="down"  className='ziti'/>
        </Menu.Item>
        <Menu.Item key="mail1" className='ziti'>  
          平台
        </Menu.Item>
        <Menu.Item key="mail2" className='ziti'>  
         财务
        </Menu.Item>
        <Menu.Item key="mail3" className='ziti'>  
          XBoot开发平台
        </Menu.Item>
        <Menu.Item key="mail4" className='ziti'>  
          XPalye支付系统
        </Menu.Item>
        <Menu.Item key="mail5" className='ziti'>  
          商城前台
        </Menu.Item>
       <span className='headr'>
       <span>游客</span>
       <span>test></span>
      <Icon type="gift"  className='ziti'/>
      <Icon type="lock"  className='ziti'/>
      <Icon type="file"  className='ziti'/>
      <Icon type="user"  className='ziti'/>
      </span>
      </Menu>




      
      </div>
    ); 
  }
}

export default Head;
