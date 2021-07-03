<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12">
      <b-card class="mt-3">
        <b-card-text>
        <p><span class="syllable">[お/o]</span> {{ $t("learning.tips.hatsuOn.o.description") }}</p>
         <b-row class="mt-2">
            <b-col cols="2"><a class="syllable" style="cursor:pointer;" @click="play('okane')"><u>おかね</u></a></b-col>
            <b-col cols="2"><strong>okane</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.o.okane") }}
            </b-col>
          </b-row>
        <b-row class="mt-2">
            <b-col cols="2"><a class="syllable" style="cursor:pointer;" @click="play('onaka')"><u>おなか</u></a></b-col>
            <b-col cols="2"><strong>onaka</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.o.onaka") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
        <b-card class="mt-3">
        <b-card-text>
        <p><span class="syllable">[を/o]</span>{{ $t("learning.tips.hatsuOn.o.description2") }}</p>
         <b-row class="mt-4">
            <b-col><a class="syllable" style="cursor:pointer;" @click="play('text')"><u> りんごをたべます</u></a></b-col>
          </b-row>
         <b-row class="mt-2">
            <b-col><strong>ringo-o tabemasu</strong></b-col>
          </b-row>
        <b-row class="mt-2">
            <b-col >
              {{ $t("learning.tips.hatsuOn.o.text") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'O',
  data () {
    return {
      soundSrc: ''
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'okane':
        this.soundSrc = '/assets/sounds/Tips/okane.mp3'
        break
      case 'onaka':
        this.soundSrc = '/assets/sounds/Tips/onaka.mp3'
        break
      case 'text':
        this.soundSrc = '/assets/sounds/Tips/tip_slide_7-2.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
