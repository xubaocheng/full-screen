<template>
  <div class="party-grid">
    <ComCard title="党员网格" :isShow="true">
      <div class="party-grid-list">
        <div
          class="party-grid-list-item"
          v-for="(item,index) in list"
          :key="`list_item_part_${index}`"
        >
          <p>{{item.name}}</p>
          <div class="party-grid-list-item-unit">
            <span>{{item.value}}</span>
            <strong>{{item.unit}}</strong>
          </div>
        </div>
      </div>
    </ComCard>
  </div>
</template>

<script>
import ComCard from '@/components/ComCard/index.vue'
export default {
  components: {
    ComCard,
  },
  data() {
    return {
      list: [
        {
          name: '正式党员',
          value: '22',
          unit: '人',
        },
        {
          name: '预备党员',
          value: '12',
          unit: '人',
        },
        {
          name: '网格系数',
          value: '100',
          unit: '%',
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
.party-grid {
  width: 100%;
  &-list {
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    &-item {
      p {
        font-size: 18px;
        color: #8ab8e6;
        line-height: 80px;
        font-weight: 500;
      }
      &-unit {
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
    }
  }
}
</style>