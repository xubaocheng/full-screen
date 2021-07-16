<template>
  <div class="countryProfile">
    <ComCard title="乡村简介">
      <p>北三泉村位于原平市西南方向3.5公里处，是个城乡结合的自然村，东临大临路，西傍辛崖路，素黄铁路贯穿南北，交通便利，地形平坦，土地肥沃。</p>
      <p>
        北三泉已有600多年的历史了，村落建筑面积200亩，耕地面积23
        14亩，其中水地2254亩，旱地70亩，全村234户，786人，主要种植作物以大田玉米为主，农业收入是村民的主要经济来源。在发展农业产业化和农业结构调整以来，养殖业不断新起，为村民的富裕添加了活力。
      </p>
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
.countryProfile {
  width: 100%;
  height: 310px;
  p {
    width: 100%;
    line-height: 32px;
    text-indent: 2em;
    padding-left: 20px;
    color: rgb(51, 204, 204);
  }
}
</style>