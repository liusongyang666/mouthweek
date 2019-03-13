import React, { Component } from 'react';
import Head from '../../pages/head/index'
import Left from '../../pages/left/index'
import '../../css/mystyle.css'
import { Tag } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { Menu, Icon } from 'antd';
import { Tabs } from 'antd';
import { Avatar } from 'antd';
import { Table } from 'antd';
class One extends Component {
  tab(){
    return {
      
      color: ['#3398DB'],
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'直接访问',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200, 334, 390, 330, 220]
          }
      ]
    }
  }
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    }
    function log(e) {
      console.log(e);
    }
    const TabPane = Tabs.TabPane;
    function preventDefault(e) {
      e.preventDefault();
      console.log('Clicked! But prevent default.');
    }

    function callback(key) {
      console.log(key);
    }


    
    return (
      <div className="One">
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

            <div className='log'>
                <div className='log_a'>
                
                  <div className='a'><Icon type="setting" /></div>
                  <div className='b'>
                      <span>5</span>
                      <span>用户总数</span>
                  </div>
                </div>
                <div className='log_a'>
                
                  <div className='a'><Icon type="setting" /></div>
                  <div className='b'>
                      <span>5</span>
                      <span>用户总数</span>
                  </div>
                </div>
                <div className='log_a'>
                
                  <div className='a'><Icon type="setting" /></div>
                  <div className='b'>
                      <span>5</span>
                      <span>用户总数</span>
                  </div>
                </div>
                <div className='log_a'>
                
                  <div className='a'><Icon type="setting" /></div>
                  <div className='b'>
                      <span>5</span>
                      <span>用户总数</span>
                  </div>
                </div>
            </div>


                  <div className='cen'>
                  <ReactEcharts className='tab' option={this.tab.bind(this)()}/>
                    <div >
                    <Tabs defaultActiveKey="1" className='gg' onChange={callback}>
    <TabPane tab="公告" className='gg' key="1" >Content of Tab Pane 1</TabPane>
    <TabPane tab="评论" className='gg' key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="最新通知" className='gg' key="3">Content of Tab Pane 3</TabPane>
  </Tabs>,
                    </div> 

                  </div>


                  <div>
                    <div className='name'> <Avatar shape="square" size={64} icon="user" /><span>user</span></div>
                    <div>
                      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />


                    </div>

                  </div>


      </div>

      </div>
    );
  }
}

export default One;
