<template>
  <div class="reception">
    <ComCard title="红色旅游接待" :isShow="true">
      <div class="chart-warpper">
        <div ref="chart" :style="{ width: '100%', height: '260px' }"></div>
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
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          show: false,
        },
        grid: {
          top: '15%',
          left: '10%',
          right: '5%',
          bottom: '15%',
        },
        xAxis: [
          {
            type: 'category',
            color: '#59588D',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff', // x轴颜色
              },
            },
            axisLabel: {
              color: '#fff', // label 字颜色
            },
            // boundaryGap: true,
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
          },
        ],

        yAxis: [
          {
            type: 'value',
            min: 0,
            splitNumber: 4,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff', // x轴颜色
              },
            },
            axisLabel: {
              color: '#fff', // label 字颜色
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: '#48B3FF',
              },
            },
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#48B3FF',
              },
            },

            itemStyle: {
              color: '#FFF',
              borderColor: '#48B3FF',
              borderWidth: 2,
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              normal: {
                color: 'rgba(195,230,255,0.1)',
                shadowColor: 'rgba(195,230,255,0.1)',
                shadowBlur: 20,
              },
            },
            data: [55, 35, 62, 55, 97, 64, 44, 66, 78, 82, 33, 77],
          },
        ],
      })
      window.onresize = myChart.resize
    },
  },
}
</script>
<style lang='scss' scoped>
.reception {
  width: 100%;
  .chart-warpper {
    width: 100%;
    height: 260px;
  }
}
</style>