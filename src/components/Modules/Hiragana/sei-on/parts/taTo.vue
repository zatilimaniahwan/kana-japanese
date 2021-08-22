<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-tato
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-tato'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/sei-on/HiraganaTa.jpg"
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
        <b-col class="mt-2" cols="2" v-for="syllable in syllabels" :key="syllable.original">
          <b-card>
            <b-card-text>
             <h3 class="syllable">{{ syllable.original }}</h3>
             <h5 class="mt-2"> {{ syllable.romaji }}</h5>
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
      <modal class="syllable" :modalId="'modal-syllable-tato'">
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
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'とけい',
          styleButton: {
            position: 'absolute',
            top: '130px',
            left: '860px'
          }
        },
        {
          hiragana: 'て',
          styleButton: {
            position: 'absolute',
            top: '390px',
            left: '240px'
          }
        },
        {
          hiragana: 'いち',
          styleButton: {
            position: 'absolute',
            top: '60px',
            left: '695px'
          }
        },
        {
          hiragana: 'くつした',
          styleButton: {
            position: 'absolute',
            top: '540px',
            left: '780px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'た':
        this.imgSrc = '/assets/gif/hiraTa-To/ta-min.gif'
        break
      case 'ち':
        this.imgSrc = '/assets/gif/hiraTa-To/chi-min.gif'
        break
      case 'つ':
        this.imgSrc = '/assets/gif/hiraTa-To/tsu-min.gif'
        break
      case 'て':
        this.imgSrc = '/assets/gif/hiraTa-To/te-min.gif'
        break
      case 'と':
        this.imgSrc = '/assets/gif/hiraTa-To/to-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-tato')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'た':
        soundSrc = '/assets/sounds/sei-on/16.mp3'
        break
      case 'ち':
        soundSrc = '/assets/sounds/sei-on/17.mp3'
        break
      case 'つ':
        soundSrc = '/assets/sounds/sei-on/18.mp3'
        break
      case 'て':
        soundSrc = '/assets/sounds/sei-on/19.mp3'
        break
      case 'と':
        soundSrc = '/assets/sounds/sei-on/20.mp3'
        break
      case 'とけい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirataTo/Hiragana_TA_tokei.mp3'
        break
      // eslint-disable-next-line no-duplicate-case
      case 'て':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirataTo/Hiragana_TA_te.mp3'
        break
      case 'いち':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirataTo/Hiragana_TA_ichi.mp3'
        break
      case 'くつした':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirataTo/Hiragana_TA_kutsushita.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
