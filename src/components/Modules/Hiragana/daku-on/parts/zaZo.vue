<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-zazo
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-zazo'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/daku-on/HiraganaZa.jpg"
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
          original: 'ざ ',
          romaji: 'za'
        },
        {
          original: 'じ',
          romaji: 'ji'
        },
        {
          original: 'ず',
          romaji: 'zu'
        },
        {
          original: 'ぜ',
          romaji: 'ze'
        },
        {
          original: 'ぞ',
          romaji: 'zo'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'かぜ',
          styleButton: {
            position: 'absolute',
            top: '180px',
            left: '925px'
          }
        },
        {
          hiragana: 'かんじ',
          styleButton: {
            position: 'absolute',
            top: '170px',
            left: '140px'
          }
        },
        {
          hiragana: 'ちず',
          styleButton: {
            position: 'absolute',
            top: '50px',
            left: '240px'
          }
        },
        {
          hiragana: 'はいざら',
          styleButton: {
            position: 'absolute',
            top: '570px',
            left: '270px'
          }
        },
        {
          hiragana: 'かぞく',
          styleButton: {
            position: 'absolute',
            top: '285px',
            left: '300px'
          }
        }
      ]
    }
  },
  methods: {
    play (val) {
      let soundSrc
      switch (val) {
      case 'かぜ':
        soundSrc = '/assets/sounds/illustration-vocab/hirazaZo/Hiragana_ZA_kaze.mp3'
        break
      case 'かんじ':
        soundSrc = '/assets/sounds/illustration-vocab/hirazaZo/Hiragana_ZA_kanji.mp3'
        break
      case 'ちず':
        soundSrc = '/assets/sounds/illustration-vocab/hirazaZo/Hiragana_ZA_chizu.mp3'
        break
      case 'はいざら':
        soundSrc = '/assets/sounds/illustration-vocab/hirazaZo/Hiragana_ZA_haizara.mp3'
        break
      case 'かぞく':
        soundSrc = '/assets/sounds/illustration-vocab/hirazaZo/Hiragana_ZA_kazoku.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
