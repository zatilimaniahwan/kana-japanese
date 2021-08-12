<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12">
      <b-card>
        <b-card-text>
          <p>{{ $t("learning.tips.sokuOn.introduction") }}</p>
        </b-card-text>
      </b-card>
      <b-card class="mt-3">
        <b-card-text>
          <b-row>
            <b-col cols="2">{{ $t("learning.tips.sokuOn.tsu.small") }}</b-col>
            <b-col cols="2">
              <a style="cursor:pointer;" @click="play('hakka')"
                ><u class="syllable">はっか</u></a
              >
            </b-col>
            <b-col cols="2">
              <strong>hakka</strong>
            </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.sokuOn.contents.hakka") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"> {{ $t("learning.tips.sokuOn.tsu.big") }}</b-col>
            <b-col cols="2">
              <a style="cursor:pointer;" @click="play('hatsuka')"
                ><u class="syllable">はつか</u></a
              >
            </b-col>
            <b-col cols="2">
              <strong>hatsuka</strong>
            </b-col>
            <b-col>
              {{ $t("learning.tips.sokuOn.contents.hatsuka") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2">{{ $t("learning.tips.sokuOn.tsu.none") }} </b-col>
            <b-col cols="2"
              ><a style="cursor:pointer;" @click="play('haka')"
                ><u class="syllable"> はか</u></a
              ></b-col
            >
            <b-col cols="2">
              <strong>haka</strong>
            </b-col>
            <b-col>
              {{ $t("learning.tips.sokuOn.contents.haka") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SokuOn',
  data () {
    return {
      soundSrc: ''
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'hakka':
        this.soundSrc = '/assets/sounds/Tips/hakka.mp3'
        break
      case 'hatsuka':
        this.soundSrc = '/assets/sounds/Tips/hatsuka.mp3'
        break
      case 'haka':
        this.soundSrc = '/assets/sounds/Tips/haka.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
