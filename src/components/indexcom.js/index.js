import React,{Component} from 'react';

import SerInputCom from '../usement';
import SerCom from '../usecom';
import Center from '../center';
import Logo from '../logo'
import Foo from '../foot'
class IndexCom extends Component {
    render(){

        return(
            <div style={{width:'100vw',height:'100vh'}}>
                <SerInputCom /> 
                <SerCom/> 
                <Center/>
                <Logo/>
                <Foo/>
            </div> 
            
              );
            
         
    }
 }
export default IndexCom;