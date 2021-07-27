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
     <modal class="syllable" :modalId="'modal-syllable-kata-tato'">
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
          original: 'タ',
          romaji: 'ta'
        },
        {
          original: 'チ',
          romaji: 'chi'
        },
        {
          original: 'ツ',
          romaji: 'tsu'
        },
        {
          original: 'テ',
          romaji: 'te'
        },
        {
          original: 'ト',
          romaji: 'to'
        }
      ],
      imgSrc: ''
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'タ':
        this.imgSrc = '/assets/gif/kataTa-To/ta-min.gif'
        break
      case 'チ':
        this.imgSrc = '/assets/gif/kataTa-To/chi-min.gif'
        break
      case 'ツ':
        this.imgSrc = '/assets/gif/kataTa-To/tsu-min.gif'
        break
      case 'テ':
        this.imgSrc = '/assets/gif/kataTa-To/te-min.gif'
        break
      case 'ト':
        this.imgSrc = '/assets/gif/kataTa-To/to-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kata-tato')
    },
    play (val) {
      switch (val) {
      case 'タ':
        this.soundSrc = '/assets/sounds/sei-on/16.mp3'
        break
      case 'チ':
        this.soundSrc = '/assets/sounds/sei-on/17.mp3'
        break
      case 'ツ':
        this.soundSrc = '/assets/sounds/sei-on/18.mp3'
        break
      case 'テ':
        this.soundSrc = '/assets/sounds/sei-on/19.mp3'
        break
      case 'ト':
        this.soundSrc = '/assets/sounds/sei-on/20.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
