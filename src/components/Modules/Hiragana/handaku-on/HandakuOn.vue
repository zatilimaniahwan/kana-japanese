<template>
  <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
      <InnerBreadcrumb :title="module" :sub-title="module" :moduleName="menuName"
        :moduleName2="subMenu"/>
    <div class="col-sm-12 ol-lg-12">
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab title="Pa-Po"><PaPo /></b-tab>
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
import PaPo from './parts/paPo'
export default {
  name: 'Malaysia',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    PaPo,
    FooterSection
  },
  data () {
    return {
      module: 'Handaku-On',
      menuName: this.$t('appMenu.kana.main'),
      subMenu: 'Hiragana'
    }
  }
}
</script>
