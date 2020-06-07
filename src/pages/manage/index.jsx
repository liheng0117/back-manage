import React, { Component } from 'react'
import echarts from 'echarts'
import './style.less'

export default class Manage extends Component {
  componentDidMount() {
    let myChart = echarts.init(this.refs.main)
    window.addEventListener('resize', () => {
      myChart.resize()
    })
    //指定图表的配置项和数据
    let option = {
      title: {
        text: '走势图',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['新注册用户', '新增订单', '新增管理员'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '2020-05-30',
          '2020-05-31',
          '2020-06-01',
          '2020-06-02',
          '2020-06-03',
          '2020-06-04',
          '2020-06-05',
        ],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '新注册用户',
          type: 'line',
          stack: '总量',
          data: [5, 22, 23, 17, 27, 0, 14],
        },
        {
          name: '新增订单',
          type: 'line',
          stack: '总量',
          data: [26, 6, 26, 16, 13, 0, 23],
        },
        {
          name: '新增管理员',
          type: 'line',
          stack: '总量',
          data: [34, 19, 78, 72, 76, 8, 26],
        },
      ],
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }
  render() {
    return (
      <div className="manage">
        <div className="manage-section">
          <h1>数据统计</h1>
          <div className="manage-top">
            <p>当日数据</p>
            <p>
              <span>14</span> 新增用户
            </p>
            <p>
              <span>23</span> 新增订单
            </p>
            <p>
              <span>26</span> 新增管理员
            </p>
          </div>
          <div className="manage-bottom">
            <p>总数据</p>
            <p>
              <span>47815</span>注册用户
            </p>
            <p>
              <span>16965</span>订单
            </p>
            <p>
              <span>69978</span>管理员
            </p>
          </div>
        </div>
        <div ref="main" style={{ width: '100%', height: 400 }}></div>
      </div>
    )
  }
}
