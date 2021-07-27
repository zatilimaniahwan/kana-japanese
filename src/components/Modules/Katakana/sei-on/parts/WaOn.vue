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
      <modal class="syllable" :modalId="'modal-syllable-kata-waon'">
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
          original: 'ワ',
          romaji: 'wa'
        },
        {
          original: 'ヲ',
          romaji: 'o'
        },
        {
          original: 'ン',
          romaji: 'N'
        }
      ],
      imgSrc: ''
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'ワ':
        this.imgSrc = '/assets/gif/kataWa-On/wa-min.gif'
        break
      case 'ヲ':
        this.imgSrc = '/assets/gif/kataWa-On/on-min.gif'
        break
      case 'ン':
        this.imgSrc = '/assets/gif/kataWa-On/n-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kata-waon')
    },
    play (val) {
      switch (val) {
      case 'ワ':
        this.soundSrc = '/assets/sounds/sei-on/44.mp3'
        break
      case 'ヲ':
        this.soundSrc = '/assets/sounds/sei-on/45.mp3'
        break
      case 'ン':
        this.soundSrc = '/assets/sounds/sei-on/46.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
