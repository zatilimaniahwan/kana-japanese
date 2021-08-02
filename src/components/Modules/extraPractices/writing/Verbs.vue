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
        <Verbs />
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import Verbs from './parts-verbs/Verb'
import FooterSection from '../../../FooterSection/footerThree'

export default {
  name: 'Adjectives',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    Verbs,
    FooterSection
  },
  data () {
    return {
      module: this.$t('learning.writingModule2.title'),
      menuName: this.$t('appMenu.kana.extra.main'),
      subMenu: this.$t('appMenu.kana.extra.submenu2')
    }
  }
}
</script>
