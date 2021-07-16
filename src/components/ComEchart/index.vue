<template>
  <div class="myChart echarts" ref="chart" :style="{ width: `${width}px`, height: `${height}px` }"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String | Number,
      default: '',
    },
    height: {
      type: String | Number,
      default: '',
    },
    option: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    width: function (newVal, oldVal) {
      console.log(newVal, oldVal, '==========')
      this.drawLine()
    },
  },
  mounted() {
    // this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      // let myChart = this.$echarts.init(this.$refs.chart)
      let myChart = this.$root.echarts.init(
        document.getElementsByClassName('myChart')[0]
      )
      // 绘制图表
      // myChart.resize({ width: this.width, height: this.height })
      // myChart.setOption(this.option)
    },
  },
}
</script>

<style></style>
