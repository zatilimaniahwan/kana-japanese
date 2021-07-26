<template>
  <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
       <InnerBreadcrumb :title="module" :sub-title="module"/>
    <div class="col-sm-12 ol-lg-12">
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab :title="$t('learning.tips.chouOn.title')"><ChouOn /></b-tab>
        <b-tab :title="$t('learning.tips.youOn.title')"><YouOn /></b-tab>
        <b-tab :title="$t('learning.tips.sokuOn.title')"><SokuOn /></b-tab>
        <b-tab :title="$t('learning.tips.hatsuOn.title')"><HatsuOn /></b-tab>
        <b-tab :title="$t('learning.tips.hatsuOn.ha.title')"><HaWa /></b-tab>
        <b-tab :title="$t('learning.tips.hatsuOn.he.title')"><HeE /></b-tab>
        <b-tab :title="$t('learning.tips.hatsuOn.o.title')"><O /></b-tab>
        <b-tab :title="$t('learning.tips.hatsuOn.desuMasu.title')"><DesuMasu /></b-tab>
      </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import ChouOn from './Chou-on'
import YouOn from './You-on'
import SokuOn from './Soku-on'
import HatsuOn from './Hatsu-on'
import HaWa from './haWa'
import HeE from './heE'
import O from './O'
import DesuMasu from './DesuMasu'
import FooterSection from '../../FooterSection/footerThree'

export default {
  name: 'Tips',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    ChouOn,
    YouOn,
    SokuOn,
    HatsuOn,
    HaWa,
    HeE,
    O,
    DesuMasu,
    FooterSection
  },
  data () {
    return {
      module: 'Tips'
    }
  }
}
</script>

<style>
</style>
