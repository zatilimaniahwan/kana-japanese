<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-gago
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-gago'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/daku-on/HiraganaGa.jpg"
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
          original: 'が',
          romaji: 'ga'
        },
        {
          original: 'ぎ',
          romaji: 'gi'
        },
        {
          original: 'ぐ',
          romaji: 'gu'
        },
        {
          original: 'げ',
          romaji: 'ge'
        },
        {
          original: 'ご',
          romaji: 'go'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'めがね',
          styleButton: {
            position: 'absolute',
            top: '400px',
            left: '200px'
          }
        },
        {
          hiragana: 'かぎ',
          styleButton: {
            position: 'absolute',
            top: '500px',
            left: '630px'
          }
        },
        {
          hiragana: 'ご',
          styleButton: {
            position: 'absolute',
            top: '180px',
            left: '70px'
          }
        },
        {
          hiragana: 'げんき',
          styleButton: {
            position: 'absolute',
            top: '210px',
            left: '340px'
          }
        },
        {
          hiragana: 'いりぐち',
          styleButton: {
            position: 'absolute',
            top: '285px',
            left: '680px'
          }
        }
      ]
    }
  },
  methods: {
    play (val) {
      let soundSrc
      switch (val) {
      case 'めがね':
        soundSrc = '/assets/sounds/illustration-vocab/hiragaGo/Hiragana_GA_megane.mp3'
        break
      case 'かぎ':
        soundSrc = '/assets/sounds/illustration-vocab/hiragaGo/Hiragana_GA_kagi.mp3'
        break
      case 'ご':
        soundSrc = '/assets/sounds/illustration-vocab/hiragaGo/Hiragana_GA_go.mp3'
        break
      case 'げんき':
        soundSrc = '/assets/sounds/illustration-vocab/hiragaGo/Hiragana_GA_genki.mp3'
        break
      case 'いりぐち':
        soundSrc = '/assets/sounds/illustration-vocab/hiragaGo/Hiragana_GA_iriguchi.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
