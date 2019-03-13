import React,{Component} from 'react';
import './indexstyle.css';
import asd from '../imgs/图片1_01.gif';

class IndexCom extends Component {
    render(){

        return(
            <div className='user-input-box'>
               <img src={asd} className='img' />
                
            </div>
            
              );
            
        
    }
 }
export default IndexCom;