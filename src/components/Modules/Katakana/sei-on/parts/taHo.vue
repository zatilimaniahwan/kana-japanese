<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-taHo
        >Vocabulary Illustration</b-button
      >
      <modal :modalId="'modal-illustration-taHo'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/katakana/sei-on/katakanaTA-HO.jpg"
            fluid
            alt="Fluid image"
          ></b-img>
          <div v-for="illustration in vocab" :key="illustration.katakana">
            <b-button
              class="btn"
              v-bind:style="illustration.styleButton"
              @click="play(illustration.katakana)"
              ><p class="syllable text-white">
                {{ illustration.katakana }}
              </p></b-button
            >
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
          <b-card class="mb-2">
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
      <modal class="syllable" :modalId="'modal-syllable-kata-tato'">
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
          original: 'タ',
          romaji: 'ta'
        },
        {
          original: 'チ',
          romaji: 'chi'
        },
        {
          original: 'ツ',
          romaji: 'tsu'
        },
        {
          original: 'テ',
          romaji: 'te'
        },
        {
          original: 'ト',
          romaji: 'to'
        },
        {
          original: 'ナ',
          romaji: 'na'
        },
        {
          original: 'ニ',
          romaji: 'ni'
        },
        {
          original: 'ヌ',
          romaji: 'nu'
        },
        {
          original: 'ネ',
          romaji: 'ne'
        },
        {
          original: 'ノ',
          romaji: 'no'
        },
        {
          original: 'ハ',
          romaji: 'ha'
        },
        {
          original: 'ヒ',
          romaji: 'hi'
        },
        {
          original: 'フ',
          romaji: 'fu'
        },
        {
          original: 'ヘ',
          romaji: 'he'
        },
        {
          original: 'ホ',
          romaji: 'ho'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          katakana: 'タクシー',
          styleButton: {
            position: 'absolute',
            top: '300px',
            left: '50px'
          }
        },
        {
          katakana: 'ノート',
          styleButton: {
            position: 'absolute',
            top: '350px',
            left: '300px'
          }
        },
        {
          katakana: 'テキスト',
          styleButton: {
            position: 'absolute',
            top: '500px',
            left: '350px'
          }
        },
        {
          katakana: 'スーツ',
          styleButton: {
            position: 'absolute',
            top: '480px',
            left: '750px'
          }
        },
        {
          katakana: 'コーヒー',
          styleButton: {
            position: 'absolute',
            top: '350px',
            left: '850px'
          }
        },
        {
          katakana: 'スカーフ',
          styleButton: {
            position: 'absolute',
            top: '100px',
            left: '950px'
          }
        },
        {
          katakana: 'アナウンサー',
          styleButton: {
            position: 'absolute',
            top: '70px',
            left: '700px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'タ':
        this.imgSrc = '/assets/gif/kataTa-To/ta-min.gif'
        break
      case 'チ':
        this.imgSrc = '/assets/gif/kataTa-To/chi-min.gif'
        break
      case 'ツ':
        this.imgSrc = '/assets/gif/kataTa-To/tsu-min.gif'
        break
      case 'テ':
        this.imgSrc = '/assets/gif/kataTa-To/te-min.gif'
        break
      case 'ト':
        this.imgSrc = '/assets/gif/kataTa-To/to-min.gif'
        break
      case 'ナ':
        this.imgSrc = '/assets/gif/kataNa-No/na-min.gif'
        break
      case 'ニ':
        this.imgSrc = '/assets/gif/kataNa-No/ni-min.gif'
        break
      case 'ヌ':
        this.imgSrc = '/assets/gif/kataNa-No/nu-min.gif'
        break
      case 'ネ':
        this.imgSrc = '/assets/gif/kataNa-No/ne-min.gif'
        break
      case 'ノ':
        this.imgSrc = '/assets/gif/kataNa-No/no-min.gif'
        break
      case 'ハ':
        this.imgSrc = '/assets/gif/kataHa-Ho/ha-min.gif'
        break
      case 'ヒ':
        this.imgSrc = '/assets/gif/kataHa-Ho/hi-min.gif'
        break
      case 'フ':
        this.imgSrc = '/assets/gif/kataHa-Ho/fu-min.gif'
        break
      case 'ヘ':
        this.imgSrc = '/assets/gif/kataHa-Ho/he-min.gif'
        break
      case 'ホ':
        this.imgSrc = '/assets/gif/kataHa-Ho/ho-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kata-tato')
    },
    play (val) {
      switch (val) {
      case 'タ':
        this.soundSrc = '/assets/sounds/sei-on/16.mp3'
        break
      case 'チ':
        this.soundSrc = '/assets/sounds/sei-on/17.mp3'
        break
      case 'ツ':
        this.soundSrc = '/assets/sounds/sei-on/18.mp3'
        break
      case 'テ':
        this.soundSrc = '/assets/sounds/sei-on/19.mp3'
        break
      case 'ト':
        this.soundSrc = '/assets/sounds/sei-on/20.mp3'
        break
      case 'ナ':
        this.soundSrc = '/assets/sounds/sei-on/21.mp3'
        break
      case 'ニ':
        this.soundSrc = '/assets/sounds/sei-on/22.mp3'
        break
      case 'ヌ':
        this.soundSrc = '/assets/sounds/sei-on/23.mp3'
        break
      case 'ネ':
        this.soundSrc = '/assets/sounds/sei-on/24.mp3'
        break
      case 'ノ':
        this.soundSrc = '/assets/sounds/sei-on/25.mp3'
        break
      case 'ハ':
        this.soundSrc = '/assets/sounds/sei-on/26.mp3'
        break
      case 'ヒ':
        this.soundSrc = '/assets/sounds/sei-on/27.mp3'
        break
      case 'フ':
        this.soundSrc = '/assets/sounds/sei-on/28.mp3'
        break
      case 'ヘ':
        this.soundSrc = '/assets/sounds/sei-on/29.mp3'
        break
      case 'ホ':
        this.soundSrc = '/assets/sounds/sei-on/30.mp3'
        break
      case 'タクシー':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_TA-HO_takushii.mp3'
        break
      case 'ノート':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_TA-HO_nooto.mp3'
        break
      case 'テキスト':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_TA-HO_tekisuto.mp3'
        break
      case 'スーツ':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_TA-HO_suutsu.mp3'
        break
      case 'コーヒー':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_TA-HO_koohii.mp3'
        break
      case 'スカーフ':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_TA-HO_sukaafu.mp3'
        break
      case 'アナウンサー':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_TA-HO_anaunsaa.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
