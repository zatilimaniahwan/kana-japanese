<template>
    <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
       <InnerBreadcrumb :title="module" :sub-title="module" :moduleName="menuName"
        :moduleName2="subMenu"/>
    <div class="col-sm-12 ol-lg-12">
      <div class="alert alert-warning mt-3" role="alert">
          <p>{{ $t("learning.writingModule.instruction") }}</p>
        </div>
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab :title="$t('learning.writingModule1.colour.title')"><Colour /></b-tab>
        <b-tab :title="$t('learning.writingModule1.feeling.title')"><Feeling /></b-tab>
      </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import Colour from './parts-adjectives/Colour'
import Feeling from './parts-adjectives/Feeling'
import FooterSection from '../../../FooterSection/footerThree'

export default {
  name: 'Adjectives',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    Colour,
    Feeling,
    FooterSection
  },
  data () {
    return {
      module: this.$t('learning.writingModule1.title'),
      menuName: this.$t('appMenu.kana.extra.main'),
      subMenu: this.$t('appMenu.kana.extra.submenu2')
    }
  }
}
</script>
