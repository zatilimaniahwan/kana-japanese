<template>
  <div class="homepage-5 ">
    <div class="main">
      <HeaderSection />
      <HeroSection />
      <FeatureSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from '../components/HeaderSection/headerOne'
import HeroSection from '../components/HeroSection/heroFive'
import FeatureSection from '../components/FeatureSection/featureFive'
import WorkSection from '../components/WorkSection/work'
import ContactSection from '../components/ContactSection/contactOne'
import FooterSection from '../components/FooterSection/footerFour'

export default {
  name: 'ThemeFive',
  components: {
    HeaderSection,
    HeroSection,
    FeatureSection,
    WorkSection,
    ContactSection,
    FooterSection
  }
}
</script>
