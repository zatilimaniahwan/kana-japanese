<template>
  <section id="home" class="section welcome-area d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <!-- Welcome Intro Start -->
        <div class="col-12 col-lg-12">
          <div class="welcome-intro">
            <h1 class="hero">
              {{ $t("home.welcome") }}
            </h1>
            <h4 class="text-white my-4"> {{ $t('home.description')}}
            <span>
            <vue-typer
              :text="[
                $t('home.ortography'),
                $t('home.hiragana'),
                $t('home.katakana'),
              ]"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="clear"
              :erase-on-complete="false"
              caret-animation="blink"
            ></vue-typer>
            </span>
            </h4>
            <!-- Store Buttons -->
            <div class="button-group store-buttons d-flex">
              <a href="#features" class="btn sApp-btn text-uppercase scroll">
                {{ $t("home.buttons.more") }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Shape Bottom -->
    <div class="shape-bottom">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="shape-fill"
          fill="#FFFFFF"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        />
      </svg>
    </div>
  </section>
</template>
<style>
.hero {
  color: #7c4fe0;
}
.vue-typer .custom.char.typed {
  color: #7c4fe0;
}
</style>
