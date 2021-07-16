<template>
  <div class="test">
    <span>{{num}}</span>
    <button @click="firstFn">按钮</button>
  </div>
</template>

<script>
import { testfn } from '../untils/comTest'
export default {
  setup() {
    const { num, firstFn } = testfn()
    // const num = ref(0)

    // const firstFn = () => {
    //   num.value++
    // }
    return {
      num,
      firstFn,
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.test {
  color: red;
}
</style>