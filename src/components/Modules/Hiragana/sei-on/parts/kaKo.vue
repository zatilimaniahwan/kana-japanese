<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-kaKo
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-kaKo'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/sei-on/HiraganaKa.jpg"
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
      <modal :modalId="'modal-syllable-kako'">
        <div class="syllable" slot="content">
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
          original: 'か',
          romaji: 'ka'
        },
        {
          original: 'き',
          romaji: 'ki'
        },
        {
          original: 'く',
          romaji: 'ku'
        },
        {
          original: 'け',
          romaji: 'ke'
        },
        {
          original: 'こ',
          romaji: 'ko'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'こい',
          styleButton: {
            position: 'absolute',
            top: '400px',
            left: '70px'
          }
        },
        {
          hiragana: 'おか',
          styleButton: {
            position: 'absolute',
            top: '190px',
            left: '200px'
          }
        },
        {
          hiragana: 'おおきい',
          styleButton: {
            position: 'absolute',
            top: '180px',
            left: '890px'
          }
        },
        {
          hiragana: 'あかい',
          styleButton: {
            position: 'absolute',
            top: '550px',
            left: '775px'
          }
        },
        {
          hiragana: 'いけ',
          styleButton: {
            position: 'absolute',
            top: '450px',
            left: '365px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'か':
        this.imgSrc = '/assets/gif/hiraKa-Ko/ka-min.gif'
        break
      case 'き':
        this.imgSrc = '/assets/gif/hiraKa-Ko/ki-min.gif'
        break
      case 'く':
        this.imgSrc = '/assets/gif/hiraKa-Ko/ku-min.gif'
        break
      case 'け':
        this.imgSrc = '/assets/gif/hiraKa-Ko/ke-min.gif'
        break
      case 'こ':
        this.imgSrc = '/assets/gif/hiraKa-Ko/ko-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kako')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'か':
        soundSrc = '/assets/sounds/sei-on/6.mp3'
        break
      case 'き':
        soundSrc = '/assets/sounds/sei-on/7.mp3'
        break
      case 'く':
        soundSrc = '/assets/sounds/sei-on/8.mp3'
        break
      case 'け':
        soundSrc = '/assets/sounds/sei-on/9.mp3'
        break
      case 'こ':
        soundSrc = '/assets/sounds/sei-on/10.mp3'
        break
      case 'こい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirakaKo/Hiragana_KA_koi.mp3'
        break
      case 'おか':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirakaKo/Hiragana_KA_oka.mp3'
        break
      case 'おおきい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirakaKo/Hiragana_KA_ookii.mp3'
        break
      case 'あかい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirakaKo/Hiragana_KA_akai.mp3'
        break
      case 'いけ':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirakaKo/Hiragana_KA_ike.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
