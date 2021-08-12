<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12">
      <b-card class="mt-3">
        <b-card-text>
        <p>{{ $t("learning.tips.hatsuOn.desuMasu.description") }}</p>
         <b-row class="mt-2">
            <b-col ><a  style="cursor:pointer;" @click="play()"><u class="syllable"> わたしはかなです。いま、マレーシアにすんでいます。</u></a></b-col>
          </b-row>
        <b-row class="mt-2">
            <b-col><strong>Watashi-wa Kana-desu. Ima, Mareshia-ni sundeimasu.</strong></b-col>
          </b-row>
        <b-row class="mt-2">
            <b-col>{{ $t("learning.tips.hatsuOn.desuMasu.text") }}</b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'O',
  methods: {
    play () {
      const audio = new Audio('/assets/sounds/Tips/tip_slide_8.mp3')
      audio.play()
    }
  }
}
</script>
