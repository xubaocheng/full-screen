<template>
  <div class="serviceCondition">
    <ComCard title="土地使用情况" :isShow="true">
      <div class="chart-warpper">
        <!-- <div class="myEcharts echarts" ref="chart"></div> -->
        <div ref="chart" :style="{ width: '380px', height: '260px' }"></div>
      </div>
    </ComCard>
  </div>
</template>

<script>
import ComCard from '@/components/ComCard/index.vue'
const colorList = [
  '#47A2FF ',
  '#53C8D1',
  '#59CB74',
  '#FBD444',
  '#7F6AAD',
  '#585247',
]
export default {
  components: { ComCard },
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          show: false,
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: '10%',
          top: 'center',
          selectedMode: true,
          icon: 'pin',
          data: ['耕地', '旱地', '水地', '辣椒地', '玉米地'],
          textStyle: {
            color: '#fff',
          },
        },
        color: colorList,
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: [50, 70],
            center: ['35%', '50%'],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: '#fff',
            },
            data: [
              { name: '耕地', value: 100 },
              { name: '旱地', value: 100 },
              { name: '水地', value: 100 },
              { name: '辣椒地', value: 100 },
              { name: '玉米地', value: 100 },
            ],
          },
        ],
      })
      window.onresize = myChart.resize
    },
  },
}
</script>
<style lang='scss' scoped>
.serviceCondition {
  width: 100%;
  .chart-warpper {
    width: 100%;
    height: 260px;
  }
}
</style>