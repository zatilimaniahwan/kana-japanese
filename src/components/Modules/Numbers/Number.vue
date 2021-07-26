<template>
    <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
      <InnerBreadcrumb
        :title="module"
        :sub-title="module"
      />
      <NumberSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import NumberSection from './NumberSection'
import FooterSection from '../../FooterSection/footerThree'

export default {
  name: 'Number',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    NumberSection,
    FooterSection
  },
  data () {
    return {
      module: this.$t('learning.moduleNum.title')
    }
  }
}
</script>

<style>

</style>
