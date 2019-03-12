import React, { Component } from 'react';
import Head from '../../pages/head/index'
import Left from '../../pages/left/index'
import { Tag } from 'antd';
import { Breadcrumb } from 'antd';
import '../../css/mystyle.css'
import ReactEcharts from 'echarts-for-react';
class App extends Component {
  box(){
    return{
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
    }
  }
  render() {
    return (
      <div className="App">
       <Head/>
       <Left/>
       <div className='one_r'>
       
       <div className='bqy'>
                        <div>
                
                <Tag><a href="/">我的首页</a></Tag>
                <Tag><a href="/two">订单列表</a></Tag>
                <Tag><a href="/three">订单支付统计</a></Tag>
              </div>
            </div>
            <div className='tabaa'>

            <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,

            </div>

            <div className='tabaa'>
            
            
            
            </div>
            <div className='tabaa'>
            <ReactEcharts option={this.box.bind(this)()}/>
            </div>
       
       </div>
      </div>
    );
  }
}

export default App;
