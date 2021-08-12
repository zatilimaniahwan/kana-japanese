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
        <b-tab :title="$t('learning.writingModule.building.title')"><Building /></b-tab>
        <b-tab :title="$t('learning.writingModule.object.title')"><Things /></b-tab>
        <b-tab :title="$t('learning.writingModule.fruit.title')"><Fruit /></b-tab>
        <b-tab :title="$t('learning.writingModule.body.title')"><BodyParts /></b-tab>
        <b-tab :title="$t('learning.writingModule.direction.title')"><Direction /></b-tab>
      </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import Building from './parts-nouns/Building'
import Things from './parts-nouns/Things'
import Fruit from './parts-nouns/Fruit'
import BodyParts from './parts-nouns/BodyParts'
import Direction from './parts-nouns/Direction'
import FooterSection from '../../../FooterSection/footerThree'

export default {
  name: 'Nouns',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    Building,
    Things,
    Fruit,
    BodyParts,
    Direction,
    FooterSection
  },
  data () {
    return {
      module: this.$t('learning.writingModule.title'),
      menuName: this.$t('appMenu.kana.extra.main')
    }
  }
}
</script>
