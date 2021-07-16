<template>
  <div class="home">
    <Container :options="{width: 1920, height: 1080}">
      <div class="layout-header">头部</div>
      <div class="layout-warpper">
        <div class="layout-warpper-module">
          <div class="layout-warpper-module-lt">
            <CountryProfile></CountryProfile>
          </div>
          <div class="layout-warpper-module-lc">
            <PreventionControl></PreventionControl>
          </div>
          <div class="layout-warpper-module-lb">
            <Market style="width:100%;height:260px;"></Market>
          </div>
        </div>
        <div class="layout-warpper-module layoutSpecial">
          <div class="layout-warpper-module-ct">
            <ViewArea></ViewArea>
          </div>
          <div class="layout-warpper-module-cb">
            <MenuList />
          </div>
        </div>
        <div class="layout-warpper-module">
          <div class="layout-warpper-module-rt">
            <ServiceCondition></ServiceCondition>
          </div>
          <div class="layout-warpper-module-rc">
            <Reception></Reception>
          </div>
          <div class="layout-warpper-module-rb">
            <PartyGrid></PartyGrid>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container'

import CountryProfile from '@/components/sCountryProfile/index'
import PreventionControl from '@/components/sPreventionControl/index'
import Market from '@/components/sMarket/index'

import ViewArea from '@/components/sViewArea/index'
import MenuList from '@/components/sMenuList/index'

import ServiceCondition from '@/components/sServiceCondition/index'
import Reception from '@/components/sReception/index'
import PartyGrid from '@/components/sPartyGrid/index'

export default {
  name: 'Home',
  components: {
    Container,
    CountryProfile,
    PreventionControl,
    Market,
    ViewArea,
    MenuList,
    ServiceCondition,
    Reception,
    PartyGrid,
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%; //1920
  height: 100%; // 1080
}
.layout-header {
  width: 100%;
  height: 100px;
  background: rgba(7, 12, 35, 0.1) url('../assets/img/head.png') center
    no-repeat;
}
.layout-warpper {
  width: 100%;
  display: flex;
  justify-content: space-around;
  &-module {
    width: 540px;
    &-lt {
      width: 100%;
      height: 330px;
    }
    &-lc {
      width: 100%;
      height: 340px;
    }
    &-lb {
      width: 100%;
      height: 290px;
    }

    &-ct {
      width: 100%;
      height: 820px;
    }
    &-cb {
      width: 100%;
      height: 140px;
    }

    &-rt {
      width: 100%;
      height: 330px;
    }
    &-rc {
      width: 100%;
      height: 340px;
    }
    &-rb {
      width: 100%;
      height: 290px;
    }
  }
  &-module.layoutSpecial {
    flex: 1;
  }
}
</style>
