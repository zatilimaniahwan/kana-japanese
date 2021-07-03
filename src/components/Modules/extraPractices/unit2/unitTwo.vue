<template>
    <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
      <InnerBreadcrumb
        :title="module"
        :sub-title="module"
        :moduleName="menuName"
        :moduleName2="subMenu"
      />
      <Section />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import Section from './section'
import FooterSection from '../../../FooterSection/footerFour'

export default {
  name: 'Number',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    Section,
    FooterSection
  },
  data () {
    return {
      module: this.$t('learning.moduleTwo.title'),
      menuName: this.$t('appMenu.kana.extra.main'),
      subMenu: this.$t('appMenu.kana.extra.submenu1')
    }
  }
}
</script>

<style>

</style>
