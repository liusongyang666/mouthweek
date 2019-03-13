import React,{ Component } from 'react';
import './indexstyle.css';
import p1 from '../imgs/图片1_22.gif';
import p2 from '../imgs/图片1_25.gif';
import p3 from '../imgs/图片1_34.gif';
class Foo extends Component {
    render(){

        return(
            <div className='foot'>
                
                <div className='le_foot_left'>
                    <img src={p1} className='p1' />
                 
                </div>
                <div className='le_foot_left'>
                    
                    <img src={p2} className='p2' /> 
                </div>
                <div className='le_foot_left'>
                    
                    <img src={p3} className='p3' /> 
                </div>
            </div>
            
              );
            
         
    }
 }
export default Foo;