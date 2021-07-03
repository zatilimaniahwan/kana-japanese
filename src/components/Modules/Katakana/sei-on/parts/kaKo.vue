<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 col-lg-12 text-center">
      <b-row class="mt-2">
        <b-col class="mt-2" cols="2" v-for="syllable in syllabels" :key="syllable.original">
          <b-card>
            <b-card-text>
             <h3 class="syllable">{{ syllable.original }}</h3>
             <h5 class="mt-2"> {{ syllable.romaji }}</h5>
             <b-button  class="bg-primary mt-3"><em class="mdi mdi-pencil-outline"></em></b-button>
            <b-button  class="bg-success mt-3 ml-2" @click="play(syllable.original)"><em class="mdi mdi-account-tie-voice"></em></b-button>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<script>
export default {
  name: 'KaKo',
  data () {
    return {
      syllabels: [
        {
          original: 'カ',
          romaji: 'ka'
        },
        {
          original: 'キ',
          romaji: 'ki'
        },
        {
          original: 'ク',
          romaji: 'ku'
        },
        {
          original: 'ケ',
          romaji: 'ke'
        },
        {
          original: 'コ',
          romaji: 'ko'
        }
      ]
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'カ':
        this.soundSrc = '/assets/sounds/sei-on/6.mp3'
        break
      case 'キ':
        this.soundSrc = '/assets/sounds/sei-on/7.mp3'
        break
      case 'ク':
        this.soundSrc = '/assets/sounds/sei-on/8.mp3'
        break
      case 'ケ':
        this.soundSrc = '/assets/sounds/sei-on/9.mp3'
        break
      case 'コ':
        this.soundSrc = '/assets/sounds/sei-on/10.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
