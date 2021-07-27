<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 col-lg-12 text-center">
      <b-row class="mt-2">
        <b-col class="mt-2" cols="2" v-for="syllable in syllabels" :key="syllable.original">
          <b-card>
            <b-card-text>
             <h3 class="syllable">{{ syllable.original }}</h3>
             <h5 class="mt-2 romaji"> {{ syllable.romaji }}</h5>
             <b-button
                class="bg-primary mt-3"
                @click="showModal(syllable.original)"
                ><em class="mdi mdi-pencil-outline"></em
              ></b-button>
           <b-button  class="bg-success mt-3 ml-2" @click="play(syllable.original)"><em class="mdi mdi-account-tie-voice"></em></b-button>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <modal class="syllable" :modalId="'modal-syllable-kata-haho'">
        <div slot="content">
          <img
            class="img-fluid"
            alt="Responsive image"
            :src="imgSrc"
            width="100%"
          />
        </div>
      </modal>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HaHo',
  data () {
    return {
      syllabels: [
        {
          original: 'ハ',
          romaji: 'ha'
        },
        {
          original: 'ヒ',
          romaji: 'hi'
        },
        {
          original: 'フ',
          romaji: 'fu'
        },
        {
          original: 'ヘ',
          romaji: 'he'
        },
        {
          original: 'ホ',
          romaji: 'ho'
        }
      ]
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'ハ':
        this.soundSrc = '/assets/sounds/sei-on/26.mp3'
        break
      case 'ヒ':
        this.soundSrc = '/assets/sounds/sei-on/27.mp3'
        break
      case 'フ':
        this.soundSrc = '/assets/sounds/sei-on/28.mp3'
        break
      case 'ヘ':
        this.soundSrc = '/assets/sounds/sei-on/29.mp3'
        break
      case 'ホ':
        this.soundSrc = '/assets/sounds/sei-on/30.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
