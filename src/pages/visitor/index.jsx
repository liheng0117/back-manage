import React, { Component } from 'react'
import echarts from 'echarts'

export default class Visitor extends Component {
  componentDidMount() {
    let myChart = echarts.init(this.refs.main)
    window.addEventListener('resize', () => {
      myChart.resize()
    })
    //指定图表的配置项和数据
    let option = {
      title: {
        text: '用户分布',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['北京', '上海', '深圳', '杭州', '其它'],
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 8112, name: '北京' },
            { value: 3393, name: '上海' },
            { value: 3696, name: '深圳' },
            { value: 2031, name: '杭州' },
            { value: 26635, name: '其它' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }
  render() {
    return (
      <div>
        <div ref="main" style={{ width: '100%', height: 400 }}></div>
      </div>
    )
  }
}
