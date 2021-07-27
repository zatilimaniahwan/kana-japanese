<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 col-lg-12 text-center">
      <b-row class="mt-2">
        <b-col
          class="mt-2"
          cols="2"
          v-for="syllable in syllabels"
          :key="syllable.original"
        >
          <b-card>
            <b-card-text>
              <h3 class="syllable">{{ syllable.original }}</h3>
              <h5 class="mt-2 romaji">{{ syllable.romaji }}</h5>
              <b-button
                class="bg-primary mt-3"
                @click="showModal(syllable.original)"
                ><em class="mdi mdi-pencil-outline"></em
              ></b-button>
              <b-button
                class="bg-success mt-3 ml-2"
                @click="play(syllable.original)"
                ><em class="mdi mdi-account-tie-voice"></em
              ></b-button>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <modal :modalId="'modal-syllable-kata-ao'">
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
          original: 'ア',
          romaji: 'a'
        },
        {
          original: 'イ',
          romaji: 'i'
        },
        {
          original: 'ウ',
          romaji: 'u'
        },
        {
          original: 'エ',
          romaji: 'e'
        },
        {
          original: 'オ',
          romaji: 'o'
        }
      ],
      imgSrc: ''
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'ア':
        this.imgSrc = '/assets/gif/kataA-O/a-min.gif'
        break
      case 'イ':
        this.imgSrc = '/assets/gif/kataA-O/i-min.gif'
        break
      case 'ウ':
        this.imgSrc = '/assets/gif/kataA-O/u-min.gif'
        break
      case 'エ':
        this.imgSrc = '/assets/gif/kataA-O/e-min.gif'
        break
      case 'オ':
        this.imgSrc = '/assets/gif/kataA-O/o-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kata-ao')
    },
    play (val) {
      switch (val) {
      case 'ア':
        this.soundSrc = '/assets/sounds/sei-on/1.mp3'
        break
      case 'イ':
        this.soundSrc = '/assets/sounds/sei-on/2.mp3'
        break
      case 'ウ':
        this.soundSrc = '/assets/sounds/sei-on/3.mp3'
        break
      case 'エ':
        this.soundSrc = '/assets/sounds/sei-on/4.mp3'
        break
      case 'オ':
        this.soundSrc = '/assets/sounds/sei-on/5.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
