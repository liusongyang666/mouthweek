import React,{Component} from 'react';
import './indexstyle.css';
import Three from '../imgs/图片1_05.gif';
import As from '../imgs/图片1_03.gif';
class IndexCom extends Component {
    render(){

        return(
            <div className='box'>
                
                <div className='gwc'>购物车</div>
                <div className='rightlogo'>
                <img src={As} className='rigth_right_logo'/>
                <div className='g'> |</div>
                <img src={Three} className='rigth_left_logo'/>
                </div>
            </div>
            
              );
            
        
    }
 }
export default IndexCom;