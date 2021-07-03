<template>
  <div class="overflow-hidden">
    <div class="main">
      <HeaderSection />
       <InnerBreadcrumb :title="module" :sub-title="module" :moduleName="menuName"/>
    <div class="col-sm-12 ol-lg-12">
      <b-tabs class="mt-4" content-class="mt-3">
        <b-tab title="A-O"><AO /></b-tab>
        <b-tab title="Ka-Ko"><KaKo /></b-tab>
        <b-tab title="Sa-So"><SaSo /></b-tab>
        <b-tab title="Ta-To"><TaTo /></b-tab>
        <b-tab title="Na-No"><NaNo /></b-tab>
        <b-tab title="Ha-Ho"><HaHo /></b-tab>
        <b-tab title="Ma-Mo"><MaMo /></b-tab>
        <b-tab title="Ya-Yo"><YaYo /></b-tab>
        <b-tab title="Ra-Ro"><RaRo /></b-tab>
        <b-tab title="Wa-O-N"><WaOn /></b-tab>
      </b-tabs>
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../../../HeaderSection/headerTwo'
import InnerBreadcrumb from '../../../InnerPages/InnerBreadcrumb/breadcrumbThree'
import FooterSection from '../../../FooterSection/footerFour'
import AO from './parts/aO'
import HaHo from './parts/haHo'
import KaKo from './parts/kaKo'
import SaSo from './parts/saSo'
import TaTo from './parts/taTo'
import NaNo from './parts/naNo'
import MaMo from './parts/maMo'
import YaYo from './parts/yaYo'
import RaRo from './parts/raRo'
import WaOn from './parts/WaOn'
export default {
  name: 'Malaysia',
  components: {
    HeaderSection,
    InnerBreadcrumb,
    AO,
    HaHo,
    KaKo,
    SaSo,
    TaTo,
    NaNo,
    MaMo,
    YaYo,
    RaRo,
    WaOn,
    FooterSection
  },
  data () {
    return {
      module: 'Sei-On',
      menuName: 'Hiragana'
    }
  }
}
</script>
