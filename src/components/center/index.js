import React, { Component } from 'react';
import './indexstyle.css'
import imgpa1 from '../imgs/q.gif'
import imgpa2 from '../imgs/qqq.gif'
import imgpa3 from '../imgs/qqqq (2).gif'
import imgpa4 from '../imgs/qqqq.gif'
class CenterBody extends Component{
    constructor(){
        super();
        this.state={
            fAllPrice:0,
            bAllCheck:false,
                list:[
                 {
                    id:'1',
                    price:20,
                    num:23,
                    name:'手工陶制碗碟',
                    ckbox:false,
                    img:imgpa1
                } , {
                    id:'1',
                    price:1099,
                    num:1,
                    name:'北欧简约大床',
                    ckbox:false,
                    img:imgpa2
                } , {
                    id:'1',
                    price:851,
                    num:1,
                    name:'文艺小资实木椅',
                    ckbox:false,
                    img:imgpa3
                } , {
                    id:'1',
                    price:0.01,
                    num:12,
                    name:'文艺清新沙发',
                    ckbox:false,
                    img:imgpa4
                }   
                ]    
        }
    }
    componentDidMount(){
        this.getCountPrice()
        let _list=this.state.list
        _list.forEach(item=>item.ckbox=false)
    }
    render(){
        return(
            <div className='CenterBody'>
                    <div className='utp_box_cen'>
                                        {
                                            this.state.list.map((item,index)=>{
                                                    return(
                                                <div className='box_cen_for' key={index}>
                                            <input type='checkbox' className='radio_box_min'
                                            onChange={()=>{
                                                let _list=this.state.list;
                                                _list[index].ckbox=!_list[index].ckbox
                                                this.setState({list:_list},()=>this.getCountPrice())
                                            }}
                                            checked={item.ckbox}/>
                                            <img src={item.img}  className='imgpa1' alt=""/>
                                            <div className='name'> 
                                                <p className='name_one'>{item.name}</p>
                                                <span className='spana'>￥{item.price}</span>
                                            </div>
                                            <div className='box_input_utton'>
                                                <input type='button' className='jian' value='-' onClick={()=>{this.changeNum(index,-1)}}/>
                                                <input type='number' className='sm' value={item.num} 
                                                onChange={(e)=>{
                                                let _list=this.state.list;
                                                if(e.target.value!==""){
                                                    _list[index].num=e.target.value
                                                this.setState({list:_list},()=>this.getCountPrice())
                                                }
                                            }} />
                                                <input type='button' className='jia' value='+'  onClick={()=>{this.changeNum(index,1)}}/>
                                            </div>
                                            </div>
                                                    );
                                            })
                                        }
                        
                    </div>
                    <div className='down_box_but'>
                        <input type='checkbox' className='radio_box' value={this.state.bAllCheck}
                                                    onClick={()=>{
                                                            let bool=!this.state.bAllCheck,_list=this.state.list
                                                            _list.forEach(item=>{
                                                                item.ckbox=bool
                                                            })
                                                        
                                                            this.setState({bAllCheck:bool,list:_list},()=>{this.getCountPrice()})
                                                    }}/>
                        <div className='a' >全选</div>
                        <div className='sum_box'>合计：<span className='many'>￥{this.state.fAllPrice}</span></div>
                        <button className='but'>结算</button>
                    </div>
            </div>
            
        )
    }
    changeNum(index,num){
        let _list=this.state.list;
        if(num<0){ //--
            if(_list[index].num>1){
               _list[index].num--      
            }
        }else{ //++
        _list[index].num++
        }
        this.setState({list:_list},()=>{
            this.getCountPrice()
        })  
    }
    getCountPrice(){
        let count=0;
        this.state.list.forEach((item,index)=>{
            if(item.ckbox){
                count+=parseInt(item.num)*parseFloat(item.price).toFixed(2)
            }
        })
        this.setState({fAllPrice:count.toFixed(2)})
    }
}
export default CenterBody;


// onChang={()=>{this.changeNum()}}, 
// onChang={this.changeNum.bind(this,)}},
// onChang={()=>{
    
// }},