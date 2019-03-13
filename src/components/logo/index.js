import React,{ Component } from 'react';
import './indexstyle.css';
import img_p1_logo from '../imgs/图片1_14.gif'
import img_p1_logo1 from '../imgs/图片1_16.gif'
import img_p1_logo2 from '../imgs/图片1_13.gif'
import img_p1_logo3 from '../imgs/图片1_15.gif'
class IndexCom extends Component{
    render(){
        return(
            <div className='logo'>
                <div className='box_under'>
                        <img src={img_p1_logo} className='img_p1_logo_1'/>
                        <div>首页</div>
                </div>
                <div className='box_under'>
                <img src={img_p1_logo1} className='img_p1_logo_1'/>
                        <div>分类</div>
                </div>
                <div className='box_under'>
                <img src={img_p1_logo2} className='img_p1_logo_1'/>
                        <div>购物车</div>
                </div>
                <div className='box_under'>
                <img src={img_p1_logo3} className='img_p1_logo_1'/>
                        <div>我的</div>
                </div>
            </div> 
        );
    }




}
export default IndexCom;