<template>
  <div class="homepage-5 ">
    <div class="main">
      <HeaderSection />
      <HeroSection />
      <FeatureSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../components/HeaderSection/headerOne'
import HeroSection from '../components/HeroSection/heroFive'
import FeatureSection from '../components/FeatureSection/featureFive'
import FooterSection from '../components/FooterSection/footerFour'

export default {
  name: 'ThemeFive',
  components: {
    HeaderSection,
    HeroSection,
    FeatureSection,
    FooterSection
  }
}
</script>
