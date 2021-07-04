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
  name: 'RaRo',
  data () {
    return {
      syllabels: [
        {
          original: 'ら',
          romaji: 'ra'
        },
        {
          original: 'り',
          romaji: 'ri'
        },
        {
          original: 'る',
          romaji: 'ru'
        },
        {
          original: 'れ',
          romaji: 're'
        },
        {
          original: 'ろ',
          romaji: 'ro'
        }
      ]
    }
  },
  methods: {
    play (val) {
      let soundSrc
      switch (val) {
      case 'ら':
        soundSrc = '/assets/sounds/sei-on/39.mp3'
        break
      case 'り':
        soundSrc = '/assets/sounds/sei-on/40.mp3'
        break
      case 'る':
        soundSrc = '/assets/sounds/sei-on/41.mp3'
        break
      case 'れ':
        soundSrc = '/assets/sounds/sei-on/42.mp3'
        break
      case 'ろ':
        soundSrc = '/assets/sounds/sei-on/43.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
