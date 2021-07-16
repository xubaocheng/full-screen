<template>
  <div class="card-com">
    <div class="card-com-title">{{title}}</div>
    <div class="card-com-unit" v-if="isShow">
      <span>1755</span>
      <strong>人</strong>
    </div>
    <div class="card-com-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang='scss' scoped>
.card-com {
  width: 100%;
  &-title {
    width: 100%;
    height: 56px;
    line-height: 56px;
    font-size: 22px;
    font-weight: 400;
    color: #fff;
    background: url('../../assets/img/Left1/title_BG.png') no-repeat;
    padding-left: 40px;
    margin-bottom: 10px;
  }
  &-unit {
    width: 50%;
    background: #383311;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 auto;
    span {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
    strong {
      font-size: 14px;
      color: #fff;
    }
  }
  &-body {
    width: 100%;
    height: 100%;
  }
}
</style>