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
      <modal class="syllable" :modalId="'modal-syllable-nano'">
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
          original: 'な',
          romaji: 'na'
        },
        {
          original: 'に',
          romaji: 'ni'
        },
        {
          original: 'ぬ',
          romaji: 'nu'
        },
        {
          original: 'ね',
          romaji: 'ne'
        },
        {
          original: 'の',
          romaji: 'no'
        }
      ],
      imgSrc: ''
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'な':
        this.imgSrc = '/assets/gif/hiraNa-No/na-min.gif'
        break
      case 'に':
        this.imgSrc = '/assets/gif/hiraNa-No/ni-min.gif'
        break
      case 'ぬ':
        this.imgSrc = '/assets/gif/hiraNa-No/nu-min.gif'
        break
      case 'ね':
        this.imgSrc = '/assets/gif/hiraNa-No/ne-min.gif'
        break
      case 'の':
        this.imgSrc = '/assets/gif/hiraNa-No/no-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-nano')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'な':
        soundSrc = '/assets/sounds/sei-on/21.mp3'
        break
      case 'に':
        soundSrc = '/assets/sounds/sei-on/22.mp3'
        break
      case 'ぬ':
        soundSrc = '/assets/sounds/sei-on/23.mp3'
        break
      case 'ね':
        soundSrc = '/assets/sounds/sei-on/24.mp3'
        break
      case 'の':
        soundSrc = '/assets/sounds/sei-on/25.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
