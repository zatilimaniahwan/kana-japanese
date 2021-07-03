<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12">
      <b-card>
        <b-card-text>
          <p>{{ $t("learning.tips.youOn.introduction") }}</p>
        </b-card-text>
      </b-card>
      <b-card class="mt-3">
        <b-card-text class="text-center">
          <b-row>
            <b-col cols="2" class="syllable"> き ki + ゃ ya = きゃ kya </b-col>
          </b-row>
          <b-row>
            <b-col cols="2" class="syllable"> ぎ gi + ゃ ya = ぎゃ gya</b-col>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card class="mt-3">
        <b-card-text>
          <p>{{ $t("learning.tips.youOn.introduction1") }}</p>
          <b-card class="mt-2">
            <b-card-text>
              <b-row>
                <b-col cols="2"><a class="syllable" style="cursor:pointer;" @click="play('ryuu')"><u> りゅう</u></a></b-col>
                <b-col cols="2">
                  <strong>ryuu</strong>
                </b-col>
                <b-col cols="2">
                  {{ $t("learning.tips.youOn.contents.ryuu") }}
                </b-col>
              </b-row>
                <b-row>
                <b-col cols="2"><a class="syllable" style="cursor:pointer;" @click="play('riyuu')"><u>りゆう</u></a> </b-col>
                <b-col cols="2">
                  <strong>riyuu</strong>
                </b-col>
                <b-col cols="2">
                  {{ $t("learning.tips.youOn.contents.riyuu") }}
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'YouOn',
  data () {
    return {
      soundSrc: ''
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'ryuu':
        this.soundSrc = '/assets/sounds/Tips/ryuu.mp3'
        break
      case 'riyuu':
        this.soundSrc = '/assets/sounds/Tips/riyuu.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
