<template>
  <div class="container">
    <div id="main" style="width: 600px;height:400px;" />
    <div class="btn">

      <el-popover
        placement="bottom"
        title=""
        width="200"
        trigger="manual"
        :content="contentText"
      >
        <el-button slot="reference" @click="ShowPopup()">获取一个uid链接</el-button>
      </el-popover>

      <div>
        <p>{{contentText}}</p>
      </div>

    </div>

  </div>
</template>

<script>
// import * as echarts from 'echarts';
import { getIdledUids, getOneUid, getUsedUids } from '@/api/data-borad'

export default {
  data() {
    return {
      contentText: '',
      value: '',
      name: '',
      idleVal: 0,
      usedVal: 0,
    }
  },
  mounted() {
    this.drawChart()
    // 获取闲置的uid数量
    getIdledUids().then(function(value) {
      this.idleVal = parseInt(value.data.uid);
      // console.log(value)
    }, function (error){
      alert("获取uid未使用量失败")
    })
    // 获取使用中的uid数量
    getUsedUids().then(function(value) {
      this.usedVal = parseInt(value.data.uid);
    }, function (error){
      alert("获取uid使用量失败")
    })
  },
  methods: {
    // 获取一个uid链接
    ShowPopup() {
      // 创建that替代this
      const that = this;
      getOneUid().then(function(value) {
        console.log(value)
        // return value.data.uid;
        that.contentText = 'http://106.55.181.157/#/' + value.data.uid;

      },function (error){
        alert("错误，请重试")
      })

    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      const myChart = this.$echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      const option = {
        title: {
          text: '订单统计',
          subtext: 'Fake Data',
          left: 'center'
        },
        // 提示文本
        tooltip: {
          trigger: 'item'
        },
        // 左上角文字说明
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: this.usedVal, name: '已使用量' },
              { value: this.idleVal, name: '未使用量' }
            ],
            emphasis: {
              itemStyle: {
              // 阴影模糊
                shadowBlur: 10,
                // 阴影的横向位移量
                shadowOffsetX: 0,
                // 阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}

</script>

<style lang="scss" scoped>

#main{
  position: relative;
  top: 50px;
  left: 50px;
}

.btn{
  position: relative;
  left: 50px;

}

</style>
