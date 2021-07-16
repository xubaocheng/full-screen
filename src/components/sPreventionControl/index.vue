<template>
  <div class="preventionControl">
    <ComCard title="当日疫情防控" :isShow="true">
      <div class="chart-warpper">
        <div class="myEcharts echarts"></div>
      </div>
    </ComCard>
  </div>
</template>

<script>
import ComCard from '@/components/ComCard/index.vue'
import ComEchart from '@/components/ComEchart/index.vue'
export default {
  components: { ComCard, ComEchart },
  data() {
    return {
      width: '',
      height: '',
      option: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine()
    })
  },
  methods: {
    init() {
      this.width = this.$refs.warpper.clientWidth
      this.height = this.$refs.warpper.clientHeight
      this.option = {
        tooltip: {
          show: false,
          trigger: 'item',
        },
        grid: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          // containLabel: true
        },
        series: {
          name: '访问来源',
          type: 'pie',
          radius: ['35%', '50%'],
          avoidLabelOverlap: true,
          label: {
            normal: {
              show: true,
            },
          },
          startAngle: 0,
          data: [
            {
              value: 400,
              name: '疫苗接种',
              itemStyle: {
                normal: {
                  color: '#14d69e',
                },
              },
            },
            {
              value: 450,
              name: '进入村民数',
              itemStyle: {
                normal: {
                  color: '#37b7c5',
                },
              },
            },
            {
              value: 450,
              name: '离开村民数',
              itemStyle: {
                normal: {
                  color: '#c0b280',
                },
              },
            },
          ],
        },
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementsByClassName('myEcharts')[0]
      )
      myChart.clear()
      // 绘制图表
      myChart.setOption({
        tooltip: {
          show: false,
          trigger: 'item',
        },
        grid: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          // containLabel: true
        },
        series: {
          name: '访问来源',
          type: 'pie',
          radius: ['35%', '50%'],
          avoidLabelOverlap: true,
          label: {
            normal: {
              show: true,
            },
          },
          startAngle: 0,
          data: [
            {
              value: 400,
              name: '疫苗接种',
              itemStyle: {
                normal: {
                  color: '#14d69e',
                },
              },
            },
            {
              value: 450,
              name: '进入村民数',
              itemStyle: {
                normal: {
                  color: '#37b7c5',
                },
              },
            },
            {
              value: 450,
              name: '离开村民数',
              itemStyle: {
                normal: {
                  color: '#c0b280',
                },
              },
            },
          ],
        },
      })
      myChart.resize()
    },
  },
}
</script>
<style lang='scss' scoped>
.preventionControl {
  width: 100%;
  .myEcharts {
    width: 380px;
    height: 260px;
  }
}
</style>