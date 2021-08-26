<template>
  <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
      <InnerBreadcrumb :title="module" :sub-title="module" :moduleName="menuName"
        :moduleName2="subMenu"/>
    <div class="col-sm-12 ol-lg-12">
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab title="Ga-Go"><GaGo /></b-tab>
        <b-tab title="Za-Zo"><ZaZo /></b-tab>
        <b-tab title="Da-Do"><DaDo /></b-tab>
        <b-tab title="Ba-Bo"><BaBo /></b-tab>
      </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import FooterSection from '../../../FooterSection/footerThree'
import GaGo from './parts/gaGo'
import ZaZo from './parts/zaZo'
import DaDo from './parts/daDo'
import BaBo from './parts/baBo'

export default {
  name: 'Malaysia',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    GaGo,
    ZaZo,
    DaDo,
    BaBo,
    FooterSection
  },
  data () {
    return {
      module: 'Daku-On',
      menuName: this.$t('appMenu.kana.main'),
      subMenu: 'Hiragana'
    }
  }
}
</script>
