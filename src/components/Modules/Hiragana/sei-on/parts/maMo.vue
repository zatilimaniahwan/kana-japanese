<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-mamo
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-mamo'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/sei-on/HiraganaMa.jpg"
            fluid
            alt="Fluid image"
          ></b-img>
        <div v-for="illustration in vocab" :key="illustration.hiragana">
          <b-button
            class="btn syllable"
            v-bind:style="illustration.styleButton"
            @click="play(illustration.hiragana)"
            ><p class="syllable text-white">{{ illustration.hiragana }}</p></b-button>
        </div>
        </div>
      </modal>
    </div>
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
      <modal class="syllable" :modalId="'modal-syllable-mamo'">
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
          original: 'ま',
          romaji: 'ma'
        },
        {
          original: 'み',
          romaji: 'mi'
        },
        {
          original: 'む',
          romaji: 'mu'
        },
        {
          original: 'め',
          romaji: 'me'
        },
        {
          original: 'も',
          romaji: 'mo'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'なまえ',
          styleButton: {
            position: 'absolute',
            top: '485px',
            left: '125px'
          }
        },
        {
          hiragana: 'おもい',
          styleButton: {
            position: 'absolute',
            top: '155px',
            left: '80px'
          }
        },
        {
          hiragana: 'ねむい',
          styleButton: {
            position: 'absolute',
            top: '385px',
            left: '275px'
          }
        },
        {
          hiragana: 'め',
          styleButton: {
            position: 'absolute',
            top: '520px',
            left: '530px'
          }
        },
        {
          hiragana: 'みみ',
          styleButton: {
            position: 'absolute',
            top: '210px',
            left: '1000px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'ま':
        this.imgSrc = '/assets/gif/hiraMa-Mo/ma-min.gif'
        break
      case 'み':
        this.imgSrc = '/assets/gif/hiraMa-Mo/mi-min.gif'
        break
      case 'む':
        this.imgSrc = '/assets/gif/hiraMa-Mo/mu-min.gif'
        break
      case 'め':
        this.imgSrc = '/assets/gif/hiraMa-Mo/me-min.gif'
        break
      case 'も':
        this.imgSrc = '/assets/gif/hiraMa-Mo/mo-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-mamo')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'ま':
        soundSrc = '/assets/sounds/sei-on/31.mp3'
        break
      case 'み':
        soundSrc = '/assets/sounds/sei-on/32.mp3'
        break
      case 'む':
        soundSrc = '/assets/sounds/sei-on/33.mp3'
        break
      case 'め':
        soundSrc = '/assets/sounds/sei-on/34.mp3'
        break
      case 'も':
        soundSrc = '/assets/sounds/sei-on/35.mp3'
        break
      case 'なまえ':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiramaMo/Hiragana_MA_namae.mp3'
        break
      case 'おもい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiramaMo/Hiragana_MA_omoi.mp3'
        break
      case 'ねむい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiramaMo/Hiragana_MA_nemui.mp3'
        break
      // eslint-disable-next-line no-duplicate-case
      case 'め':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiramaMo/Hiragana_MA_me.mp3'
        break
      case 'みみ':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiramaMo/Hiragana_MA_mimi.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
