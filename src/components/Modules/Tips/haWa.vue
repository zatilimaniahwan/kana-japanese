<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 col-md-12 col-lg-12">
      <b-card class="mt-3">
        <b-card-text>
        <p><span class="syllable">[は/ha]</span> {{ $t("learning.tips.hatsuOn.ha.description") }}</p>
         <b-row class=" mt-3">
            <b-col cols="2"><a style="cursor:pointer;" @click="play('haru')"><u class="syllable">はる</u></a></b-col>
            <b-col cols="2"><strong>haru</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.ha.haru") }}
            </b-col>
          </b-row>
        <b-row>
            <b-col cols="2"><a  style="cursor:pointer;" @click="play('hako')"><u class="syllable">はこ</u></a></b-col>
            <b-col cols="2"><strong>hako</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.ha.hako") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
        <b-card class="mt-3">
        <b-card-text>
        <p><span class="syllable">[は/wa]</span>{{ $t("learning.tips.hatsuOn.wa.description") }}</p>
         <b-row class="mt-4">
            <b-col><a  style="cursor:pointer;" @click="play('text')"><u class="syllable">ハシムさんはいいがくせいです。</u></a></b-col>
          </b-row>
         <b-row class="mt-2">
            <b-col><strong>Hashimusan-wa ii gakuseidesu.</strong></b-col>
          </b-row>
        <b-row class="mt-2">
            <b-col >
              {{ $t("learning.tips.hatsuOn.wa.text") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HaWa',
  data () {
    return {
      soundSrc: ''
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'haru':
        this.soundSrc = '/assets/sounds/Tips/haru.mp3'
        break
      case 'hako':
        this.soundSrc = '/assets/sounds/Tips/hako.mp3'
        break
      case 'text':
        this.soundSrc = '/assets/sounds/Tips/tip_slide_5-2.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
