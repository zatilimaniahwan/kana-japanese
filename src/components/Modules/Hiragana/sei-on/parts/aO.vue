<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-ao
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-ao'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/sei-on/HiraganaA.jpg"
            fluid
            alt="Fluid image"
          ></b-img>
        <p v-for="illustration in vocab" :key="illustration.hiragana">
          <b-button
            class="btn syllable"
            v-bind:style="illustration.styleButton"
            @click="play(illustration.hiragana)"
            >{{ illustration.hiragana }}</b-button>
        </p>
        </div>
      </modal>
    </div>
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
      <modal :modalId="'modal-syllable-ao'">
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
          original: 'あ',
          romaji: 'a'
        },
        {
          original: 'い',
          romaji: 'i'
        },
        {
          original: 'う',
          romaji: 'u'
        },
        {
          original: 'え',
          romaji: 'e'
        },
        {
          original: 'お',
          romaji: 'o'
        }
      ],
      imgSrc: '',
      modalShow: false,
      vocab: [
        {
          hiragana: 'うえ',
          styleButton: {
            position: 'absolute',
            top: '80px',
            left: '160px'
          }
        },
        {
          hiragana: 'あおい',
          styleButton: {
            position: 'absolute',
            top: '520px',
            left: '790px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'あ':
        this.imgSrc = '/assets/gif/hiraA-O/a-min.gif'
        break
      case 'い':
        this.imgSrc = '/assets/gif/hiraA-O/i-min.gif'
        break
      case 'う':
        this.imgSrc = '/assets/gif/hiraA-O/u-min.gif'
        break
      case 'え':
        this.imgSrc = '/assets/gif/hiraA-O/e-min.gif'
        break
      case 'お':
        this.imgSrc = '/assets/gif/hiraA-O/o-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-ao')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'あ':
        soundSrc = '/assets/sounds/sei-on/1.mp3'
        break
      case 'い':
        soundSrc = '/assets/sounds/sei-on/2.mp3'
        break
      case 'う':
        soundSrc = '/assets/sounds/sei-on/3.mp3'
        break
      case 'え':
        soundSrc = '/assets/sounds/sei-on/4.mp3'
        break
      case 'お':
        soundSrc = '/assets/sounds/sei-on/5.mp3'
        break
      case 'うえ':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiraAo/Hiragana_A_ue.mp3'
        break
      case 'あおい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiraAo/Hiragana_A_aoi.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
