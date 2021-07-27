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
      <modal class="syllable" :modalId="'modal-syllable-kata-saso'">
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
          original: 'サ',
          romaji: 'sa'
        },
        {
          original: 'シ',
          romaji: 'shi'
        },
        {
          original: 'ス',
          romaji: 'su'
        },
        {
          original: 'セ',
          romaji: 'se'
        },
        {
          original: 'ソ',
          romaji: 'so'
        }
      ],
      imgSrc: ''
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'サ':
        this.imgSrc = '/assets/gif/kataSa-So/sa-min.gif'
        break
      case 'シ':
        this.imgSrc = '/assets/gif/kataSa-So/shi-min.gif'
        break
      case 'ス':
        this.imgSrc = '/assets/gif/kataSa-So/su-min.gif'
        break
      case 'セ':
        this.imgSrc = '/assets/gif/kataSa-So/se-min.gif'
        break
      case 'ソ':
        this.imgSrc = '/assets/gif/kataSa-So/so-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kata-saso')
    },
    play (val) {
      switch (val) {
      case 'サ':
        this.soundSrc = '/assets/sounds/sei-on/11.mp3'
        break
      case 'シ':
        this.soundSrc = '/assets/sounds/sei-on/12.mp3'
        break
      case 'ス':
        this.soundSrc = '/assets/sounds/sei-on/13.mp3'
        break
      case 'セ':
        this.soundSrc = '/assets/sounds/sei-on/14.mp3'
        break
      case 'ソ':
        this.soundSrc = '/assets/sounds/sei-on/15.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
