import React, { Component } from 'react';
import '../../css/mystyle.css'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
class Left extends Component {
    
  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    function handleClick(e) {
        console.log('click', e);
      }
    return (
      <div className="Left">
       <Menu onClick={handleClick} style={{ width: 196}} mode="vertical" className='leftco'>
      
    <SubMenu key="sub1" title={<span><Icon type="mail" /> <Link to='/'><span>商城内容管理</span></Link></span>}>
      
    </SubMenu>
    
    
    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>缓存管理</span></span>}>
     
    </SubMenu>
    
    
    <SubMenu key="sub3" title={<span><Icon type="setting" /><span>商品管理</span></span>}>
      
    </SubMenu>
    <SubMenu key="sub4" title={<span><Icon type="setting" /><Link to='/two'><span>订单管理</span></Link></span>}>
      
    </SubMenu>
    <SubMenu key="sub5" title={<span><Icon type="setting" /><span>搜索管理</span></span>}>
      
    </SubMenu>
    <SubMenu key="sub6" title={<span><Icon type="setting" /><span>评论管理</span></span>}>
      
    </SubMenu>
    <SubMenu key="sub7" title={<span><Icon type="setting" /><span>会员管理</span></span>}>
      
    </SubMenu>
    <SubMenu key="sub8" title={<span><Icon type="setting" /><span>管理员管理</span></span>}>
      
    </SubMenu>
    <SubMenu key="sub9" title={<span><Icon type="setting" /><Link to='/three'><span>统计报表</span></Link></span>}>
      
    </SubMenu>
    <SubMenu key="sub10" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
      
    </SubMenu>
  
  </Menu>
      </div>
    );
  }
}

export default Left;
