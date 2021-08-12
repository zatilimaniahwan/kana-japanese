<template>
  <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
       <InnerBreadcrumb :title="module" :sub-title="module" :moduleName="menuName"/>
    <div class="col-sm-12 ol-lg-12">
            <div class="alert alert-warning mt-3" role="alert">
          <p>{{ $t("learning.listening.instruction") }}</p>
        </div>
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab title="A-So"><ASo /></b-tab>
        <b-tab title="Ta-Ho"><TaHo /></b-tab>
        <b-tab title="Ma-N"><MaN /></b-tab>
        <b-tab title="Ga-Do"><GaDo /></b-tab>
        <b-tab title="Ba-Bo"><BaBo /></b-tab>
        <b-tab title="Pa-Po"><PaPo /></b-tab>
        <b-tab title="Kya-Ryo"><KyaRyo /></b-tab>
        <b-tab title="Tokushu-On"></b-tab>
      </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../../../InnerPages/InnerBreadcrumb/breadcrumbThree.vue'
import FooterSection from '../../../../FooterSection/footerThree'
import ASo from './parts/aSo'
import TaHo from './parts/taHo'
import MaN from './parts/maN'
import GaDo from './parts/gaDo'
import BaBo from './parts/baBo'
import PaPo from './parts/paPo'
import KyaRyo from './parts/kyaRyo'
export default {
  components: {
    HeaderSection,
    InnerBreadcrumb,
    FooterSection,
    ASo,
    TaHo,
    MaN,
    GaDo,
    BaBo,
    PaPo,
    KyaRyo
  },
  data () {
    return {
      module: 'Katakana',
      menuName: this.$t('appMenu.kana.extra.submenu1.sub')
    }
  }
}
</script>
