<template>
  <div>
    <div class="main">
      <HeaderSection />
      <InnerBreadcrumb
        :title="module"
        :sub-title="module"
        :moduleName="menuName"
      />
      <div class="col-sm-12 ol-lg-12">
        <b-tabs class="mt-4" content-class="mt-3">
          <b-tab :title="$t('learning.greetings.partOne.title')">
            <PartOne />
          </b-tab>
          <b-tab :title="$t('learning.greetings.partTwo.title')">
            <PartTwo />
          </b-tab>
          <b-tab :title="$t('learning.greetings.partThree.title')">
            <PartThree />
          </b-tab>
          <b-tab :title="$t('learning.greetings.partFour.title')">
            <PartFour />
          </b-tab>
        </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import FooterSection from '../../FooterSection/footerThree'
import PartOne from './parts/partOne'
import PartTwo from './parts/partTwo'
import PartThree from './parts/partThree'
import PartFour from './parts/partFour'

export default {
  name: 'Greeting',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    PartOne,
    PartTwo,
    PartThree,
    PartFour,
    FooterSection
  },
  data () {
    return {
      module: this.$t('appMenu.kana.greeting'),
      menuName: this.$t('appMenu.kana.main')
    }
  }
}
</script>
