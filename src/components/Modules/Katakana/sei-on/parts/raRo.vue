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
      <modal class="syllable" :modalId="'modal-syllable-kata-raro'">
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
          original: 'ラ',
          romaji: 'ra'
        },
        {
          original: 'リ',
          romaji: 'ri'
        },
        {
          original: 'ル',
          romaji: 'ru'
        },
        {
          original: 'レ',
          romaji: 're'
        },
        {
          original: 'ロ',
          romaji: 'ro'
        }
      ],
      imgSrc: ''
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'ラ':
        this.imgSrc = '/assets/gif/kataRa-Ro/ra-min.gif'
        break
      case 'リ':
        this.imgSrc = '/assets/gif/kataRa-Ro/ri-min.gif'
        break
      case 'ル':
        this.imgSrc = '/assets/gif/kataRa-Ro/ru-min.gif'
        break
      case 'レ':
        this.imgSrc = '/assets/gif/kataRa-Ro/re-min.gif'
        break
      case 'ロ':
        this.imgSrc = '/assets/gif/kataRa-Ro/ro-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kata-raro')
    },
    play (val) {
      switch (val) {
      case 'ラ':
        this.soundSrc = '/assets/sounds/sei-on/39.mp3'
        break
      case 'リ':
        this.soundSrc = '/assets/sounds/sei-on/40.mp3'
        break
      case 'ル':
        this.soundSrc = '/assets/sounds/sei-on/41.mp3'
        break
      case 'レ':
        this.soundSrc = '/assets/sounds/sei-on/42.mp3'
        break
      case 'ロ':
        this.soundSrc = '/assets/sounds/sei-on/43.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
