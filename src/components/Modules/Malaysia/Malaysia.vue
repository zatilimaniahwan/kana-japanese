<template>
  <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
       <InnerBreadcrumb :title="module" :sub-title="module"/>
    <div class="col-sm-12 ol-lg-12">
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab :title="$t('learning.malaysia.title1')"><State /></b-tab>
        <b-tab :title="$t('learning.malaysia.title2')"><PartTwo /></b-tab>
      </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import FooterSection from '../../FooterSection/footerFour'
import State from './parts/State'
import PartTwo from './parts/partTwo'

export default {
  name: 'Malaysia',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    State,
    PartTwo,
    FooterSection
  },
  data () {
    return {
      module: 'Katakana (Malaysia)'
    }
  }
}
</script>

<style>
</style>
