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
  name: 'TaTo',
  data () {
    return {
      syllabels: [
        {
          original: 'た',
          romaji: 'ta'
        },
        {
          original: 'ち',
          romaji: 'chi'
        },
        {
          original: 'つ',
          romaji: 'tsu'
        },
        {
          original: 'て',
          romaji: 'te'
        },
        {
          original: 'と',
          romaji: 'to'
        }
      ]
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'た':
        this.soundSrc = '/assets/sounds/sei-on/16.mp3'
        break
      case 'ち':
        this.soundSrc = '/assets/sounds/sei-on/17.mp3'
        break
      case 'つ':
        this.soundSrc = '/assets/sounds/sei-on/18.mp3'
        break
      case 'て':
        this.soundSrc = '/assets/sounds/sei-on/19.mp3'
        break
      case 'と':
        this.soundSrc = '/assets/sounds/sei-on/20.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
