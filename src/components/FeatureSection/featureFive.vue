<template>
  <section
    id="features"
    class="section features-area style-two overflow-hidden ptb_100"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <!-- Section Heading -->
          <div class="section-heading">
            <h2>{{ $t('feature.title')}}</h2>
            <h4 class="d-none d-sm-block mt-5">
              {{ $t('feature.subTitle.intro')}}
            </h4>
            <p
              class="d-none d-sm-block mt-2"
              style="font-size: 0.98rem"
            >
               {{ $t('feature.description')}}
            </p>
          </div>
        </div>
      </div>
      <h4 class="d-none d-sm-block">
       {{ $t('feature.subTitle.module')}}
      </h4>
      <div class="row">
        <div
          v-for="module in modules"
          :key="module.name"
          class="col-12 col-md-6 col-lg-4 my-3 res-margin"
        >
          <!-- Image Box -->
          <div
            class="image-box text-center icon-1 p-5 wow fadeInLeft"
            data-aos-duration="2s"
            data-wow-delay="0.4s"
          >
            <!-- Featured Image -->
            <div class="featured-img mb-3">
              <img
                class="avatar-md"
                :src="module.url"
                alt=""
                width=100%
              >
            </div>
            <!-- Icon Text -->
            <div class="icon-text">
              <h3 class="mb-2">
                {{ module.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureFive',
  data () {
    return {
      modules: [
        {
          url: 'assets/img/features/hiragana_letter_a_u3042_icon_128x128.png',
          name: 'Hiragana'
        },
        {
          url: 'assets/img/features/katakana_letter_small_ka_u30F5_icon_128x128.png',
          name: 'Katakana'
        },
        {
          url: 'assets/img/features/123-numbers.png',
          name: this.$t('feature.modules.number')
        },
        {
          url: 'assets/img/features/ClipartKey_2567644.png',
          name: this.$t('feature.modules.greeting')
        },
        {
          url: 'assets/img/features/kisspng-flag-of-malaysia-t-shirt-malaysia-flag-watercolor-5adcc8b0770127.8312025615244187364875.png',
          name: 'Katakana (Malaysia)'
        },
        {
          url: 'assets/img/features/feedback.png',
          name: this.$t('feature.modules.extra')
        },
        {
          url: 'assets/img/features/information-logotype-in-a-circle.png',
          name: 'Tips'
        }
      ]
    }
  }
}
</script>

<style>

</style>
