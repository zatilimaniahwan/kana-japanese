<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-yayo
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-yayo'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/sei-on/HiraganaYa.jpg"
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
       <modal class="syllable" :modalId="'modal-syllable-yayo'">
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
          original: 'や',
          romaji: 'ya'
        },
        {
          original: 'ゆ',
          romaji: 'yu'
        },
        {
          original: 'よ',
          romaji: 'yo'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'ようふく',
          styleButton: {
            position: 'absolute',
            top: '540px',
            left: '225px'
          }
        },
        {
          hiragana: 'やま',
          styleButton: {
            position: 'absolute',
            top: '50px',
            left: '770px'
          }
        },
        {
          hiragana: 'ゆき',
          styleButton: {
            position: 'absolute',
            top: '400px',
            left: '755px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'や':
        this.imgSrc = '/assets/gif/hiraYa-Yo/ya-min.gif'
        break
      case 'ゆ':
        this.imgSrc = '/assets/gif/hiraYa-Yo/yu-min.gif'
        break
      case 'よ':
        this.imgSrc = '/assets/gif/hiraYa-Yo/yo-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-yayo')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'や':
        soundSrc = '/assets/sounds/sei-on/36.mp3'
        break
      case 'ゆ':
        soundSrc = '/assets/sounds/sei-on/37.mp3'
        break
      case 'よ':
        soundSrc = '/assets/sounds/sei-on/38.mp3'
        break
      case 'ようふく':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirayaYo/Hiragana_YA_youfuku.mp3'
        break
      case 'やま':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirayaYo/Hiragana_YA_yama.mp3'
        break
      case 'ゆき':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirayaYo/Hiragana_YA_yuki.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
