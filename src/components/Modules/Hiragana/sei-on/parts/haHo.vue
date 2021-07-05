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
      <modal class="syllable" :modalId="'modal-syllable-haho'">
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
import Modal from '../../../../Modal/Modal'
export default {
  components: { Modal },
  data () {
    return {
      syllabels: [
        {
          original: 'は',
          romaji: 'ha'
        },
        {
          original: 'ひ',
          romaji: 'hi'
        },
        {
          original: 'ふ',
          romaji: 'fu'
        },
        {
          original: 'へ',
          romaji: 'he'
        },
        {
          original: 'ほ',
          romaji: 'ho'
        }
      ],
      imgSrc: ''
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'は':
        this.imgSrc = '/assets/gif/hiraHa-Ho/ha-min.gif'
        break
      case 'ひ':
        this.imgSrc = '/assets/gif/hiraHa-Ho/hi-min.gif'
        break
      case 'ふ':
        this.imgSrc = '/assets/gif/hiraHa-Ho/fu-min.gif'
        break
      case 'へ':
        this.imgSrc = '/assets/gif/hiraHa-Ho/he-min.gif'
        break
      case 'ほ':
        this.imgSrc = '/assets/gif/hiraHa-Ho/ho-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-haho')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'は':
        soundSrc = '/assets/sounds/sei-on/26.mp3'
        break
      case 'ひ':
        soundSrc = '/assets/sounds/sei-on/27.mp3'
        break
      case 'ふ':
        soundSrc = '/assets/sounds/sei-on/28.mp3'
        break
      case 'へ':
        soundSrc = '/assets/sounds/sei-on/29.mp3'
        break
      case 'ほ':
        soundSrc = '/assets/sounds/sei-on/30.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
