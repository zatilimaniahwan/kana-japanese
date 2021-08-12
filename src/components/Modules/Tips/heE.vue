<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12">
      <b-card class="mt-3">
        <b-card-text>
        <p><span class="syllable">[へ/he]</span> {{ $t("learning.tips.hatsuOn.he.description") }}</p>
         <b-row class="mt-2">
            <b-col cols="2"><a  style="cursor:pointer;" @click="play('hei')"><u class="syllable">へい</u></a></b-col>
            <b-col cols="2"><strong>hei</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.he.hei") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
        <b-card class="mt-3">
        <b-card-text>
        <p><span class="syllable">[へ/e]</span>{{ $t("learning.tips.hatsuOn.e.description") }}</p>
         <b-row class="mt-4">
            <b-col><a  style="cursor:pointer;" @click="play('text')"><u class="syllable"> こうえんへいきます。</u></a></b-col>
          </b-row>
         <b-row class="mt-2">
            <b-col><strong>Kouen-e ikimasu.</strong></b-col>
          </b-row>
        <b-row class="mt-2">
            <b-col >
              {{ $t("learning.tips.hatsuOn.e.text") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeE',
  data () {
    return {
      soundSrc: ''
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'hei':
        this.soundSrc = '/assets/sounds/Tips/hei.mp3'
        break
      case 'text':
        this.soundSrc = '/assets/sounds/Tips/tip_slide_6-2.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
