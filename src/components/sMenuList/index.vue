<template>
  <div class="menuList">
    <div
      class="menuList-item"
      v-for="(item,index) in list"
      :key="`list_item_${index}`"
      :style="{'background': `rgba(255, 255, 255, 0.4) url(${item.background}) center no-repeat`}"
    >
      <i
        :style="{'background': `url(${item.icon}) center  no-repeat`,'background-size': '80% 80%'}"
      ></i>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/img/Bottom/Menu1/1.png'
import img2 from '@/assets/img/Bottom/Menu1/2.png'
import img3 from '@/assets/img/Bottom/Menu1/3.png'
import img4 from '@/assets/img/Bottom/Menu1/4.png'
import img5 from '@/assets/img/Bottom/Menu1/5.png'
import img6 from '@/assets/img/Bottom/Menu1/6.png'

import bg1 from '@/assets/img/Bottom/Menu1/bg1.png'
import bg2 from '@/assets/img/Bottom/Menu1/bg2.png'
import bg3 from '@/assets/img/Bottom/Menu1/bg3.png'
import bg4 from '@/assets/img/Bottom/Menu1/bg4.png'
import bg5 from '@/assets/img/Bottom/Menu1/bg5.png'
import bg6 from '@/assets/img/Bottom/Menu1/bg6.png'
export default {
  components: {},
  data() {
    return {
      list: [
        {
          name: '乡村简介',
          icon: img1,
          background: bg1,
        },
        {
          name: '疫情防控',
          icon: img2,
          background: bg2,
        },
        {
          name: '农副产品',
          icon: img3,
          background: bg3,
        },
        {
          name: '乡村用地',
          icon: img4,
          background: bg4,
        },
        {
          name: '特色旅游',
          icon: img5,
          background: bg5,
        },
        {
          name: '党员网格',
          icon: img6,
          background: bg6,
        },
      ],
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.menuList {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  &-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    i {
      width: 115px;
      height: 100px;
    }
    span {
      color: #fff;
      padding-top: 10px;
      text-align: center;
    }
  }
}
</style>