<template>
  <div class="market">
    <ComCard title="当日农产品销售" :isShow="false">
      <div class="chart-warpper">
        <div class="myEcharts echarts" ref="chart"></div>
      </div>
    </ComCard>
  </div>
</template>

<script>
import ComCard from '@/components/ComCard/index.vue'
export default {
  components: { ComCard },
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine()
    })
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementsByClassName('myEcharts')[1]
      )
      // 绘制图表
      myChart.setOption({
        grid: {
          top: '30',
          left: '50',
          right: '40',
          bottom: '20',
          // containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['鸡', '牛', '羊', '辣椒'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff', // x轴颜色
            },
          },
          axisLabel: {
            color: '#fff', // label 字颜色
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff', // x轴颜色
            },
          },
          axisLabel: {
            color: '#fff', // label 字颜色
          },
        },
        series: [
          {
            data: [120, 200, 110, 130],
            type: 'bar',
          },
        ],
      })
      window.onresize = myChart.resize
    },
  },
}
</script>
<style lang='scss' scoped>
.market {
  width: 100%;
  .myEcharts {
    width: 100%;
    height: 220px;
  }
}
</style>