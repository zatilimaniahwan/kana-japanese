<template>
  <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
          <InnerBreadcrumb :title="module" :sub-title="module" :moduleName="menuName"
        :moduleName2="subMenu"/>
    <div class="col-sm-12 ol-lg-12">
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab title="A-SO"><ASO /></b-tab>
        <b-tab title="Ta-Ho"><TaHo /></b-tab>
        <b-tab title="Ma-N"><MaN /></b-tab>
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
import ASO from './parts/aSO'
import TaHo from './parts/taHo'
import MaN from './parts/maN'

export default {
  name: 'Malaysia',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    ASO,
    TaHo,
    MaN,
    FooterSection
  },
  data () {
    return {
      module: 'Sei-On',
      menuName: this.$t('appMenu.kana.main'),
      subMenu: 'Katakana'
    }
  }
}
</script>
