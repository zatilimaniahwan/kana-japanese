<template>
  <div>
    <div class="main">
      <HeaderSection />
         <InnerBreadcrumb :title="module" :sub-title="module" :moduleName="menuName"
        :moduleName2="subMenu"/>
    <div class="col-sm-12 ol-lg-12">
      <div class="alert alert-warning mt-3" role="alert">
          <p>{{ $t("learning.extraVocab.instruction") }}</p>
        </div>
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab :title="$t('learning.extraVocab.market')">
            <Market />
        </b-tab>
        <b-tab :title="$t('learning.extraVocab.food')"><Food /></b-tab>
        <b-tab :title="$t('learning.extraVocab.colour')"><Colour /></b-tab>
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
import Market from './Market'
import Colour from './Colour'
import Food from './Food'

export default {
  name: 'Adjectives',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    Market,
    Colour,
    Food,
    FooterSection
  },
  data () {
    return {
      module: this.$t('learning.extraVocab.title'),
      menuName: this.$t('appMenu.kana.extra.main'),
      subMenu: this.$t('appMenu.kana.extra.submenu3')
    }
  }
}
</script>

<style>
</style>
