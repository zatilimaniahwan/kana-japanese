<template>
  <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
       <InnerBreadcrumb :title="module" :sub-title="module" :moduleName="menuName"/>
    <div class="col-sm-12 ol-lg-12">
            <div class="alert alert-warning mt-3" role="alert">
          <p>{{ $t("learning.listening.instruction") }}</p>
        </div>
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab title="A-KO"><AKo /></b-tab>
        <b-tab title="Sa-To"><SaTo /></b-tab>
        <b-tab title="Na-Ho"><NaHo /></b-tab>
        <b-tab title="Ma-Yo"><MaYo /></b-tab>
        <b-tab title="Ra-N"></b-tab>
        <b-tab title="Ga-Zo"></b-tab>
        <b-tab title="Da-Po"></b-tab>
        <b-tab title="Kya-Jo"></b-tab>
        <b-tab title="Cha-Ryo"></b-tab>
      </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../../../InnerPages/InnerBreadcrumb/breadcrumbThree.vue'
import FooterSection from '../../../../FooterSection/footerThree'
import AKo from './parts/aKo'
import SaTo from './parts/saTo'
import NaHo from './parts/naHo'
import MaYo from './parts/maYo'
export default {
  components: {
    HeaderSection,
    InnerBreadcrumb,
    FooterSection,
    AKo,
    SaTo,
    NaHo,
    MaYo
  },
  data () {
    return {
      module: 'Hiragana',
      menuName: this.$t('appMenu.kana.extra.submenu1.sub')
    }
  }
}
</script>
