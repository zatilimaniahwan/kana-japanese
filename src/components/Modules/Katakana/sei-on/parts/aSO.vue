<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-aSo
        >Vocabulary Illustration</b-button
      >
      <modal :modalId="'modal-illustration-aSo'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/katakana/sei-on/katakanaA-SO.jpg"
            fluid
            alt="Fluid image"
          ></b-img>
          <div v-for="illustration in vocab" :key="illustration.katakana">
            <b-button
              class="btn"
              v-bind:style="illustration.styleButton"
              @click="play(illustration.katakana)"
              ><p class="syllable text-white">{{ illustration.katakana }}</p></b-button
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
      <modal :modalId="'modal-syllable-kata-ao'">
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
          original: 'ア',
          romaji: 'a'
        },
        {
          original: 'イ',
          romaji: 'i'
        },
        {
          original: 'ウ',
          romaji: 'u'
        },
        {
          original: 'エ',
          romaji: 'e'
        },
        {
          original: 'オ',
          romaji: 'o'
        },
        {
          original: 'カ',
          romaji: 'ka'
        },
        {
          original: 'キ',
          romaji: 'ki'
        },
        {
          original: 'ク',
          romaji: 'ku'
        },
        {
          original: 'ケ',
          romaji: 'ke'
        },
        {
          original: 'コ',
          romaji: 'ko'
        },
        {
          original: 'サ',
          romaji: 'sa'
        },
        {
          original: 'シ',
          romaji: 'shi'
        },
        {
          original: 'ス',
          romaji: 'su'
        },
        {
          original: 'セ',
          romaji: 'se'
        },
        {
          original: 'ソ',
          romaji: 'so'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          katakana: 'ソース',
          styleButton: {
            position: 'absolute',
            top: '250px',
            left: '50px'
          }
        },
        {
          katakana: 'キウイ',
          styleButton: {
            position: 'absolute',
            top: '480px',
            left: '90px'
          }
        },
        {
          katakana: 'ケーキ',
          styleButton: {
            position: 'absolute',
            top: '320px',
            left: '700px'
          }
        },
        {
          katakana: 'めがねケース',
          styleButton: {
            position: 'absolute',
            top: '520px',
            left: '890px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'ア':
        this.imgSrc = '/assets/gif/kataA-O/a-min.gif'
        break
      case 'イ':
        this.imgSrc = '/assets/gif/kataA-O/i-min.gif'
        break
      case 'ウ':
        this.imgSrc = '/assets/gif/kataA-O/u-min.gif'
        break
      case 'エ':
        this.imgSrc = '/assets/gif/kataA-O/e-min.gif'
        break
      case 'オ':
        this.imgSrc = '/assets/gif/kataA-O/o-min.gif'
        break
      case 'カ':
        this.imgSrc = '/assets/gif/kataKa-Ko/ka-min.gif'
        break
      case 'キ':
        this.imgSrc = '/assets/gif/kataKa-Ko/ki-min.gif'
        break
      case 'ク':
        this.imgSrc = '/assets/gif/kataKa-Ko/ku-min.gif'
        break
      case 'ケ':
        this.imgSrc = '/assets/gif/kataKa-Ko/ke-min.gif'
        break
      case 'コ':
        this.imgSrc = '/assets/gif/kataKa-Ko/ko-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kata-ao')
    },
    play (val) {
      switch (val) {
      case 'ア':
        this.soundSrc = '/assets/sounds/sei-on/1.mp3'
        break
      case 'イ':
        this.soundSrc = '/assets/sounds/sei-on/2.mp3'
        break
      case 'ウ':
        this.soundSrc = '/assets/sounds/sei-on/3.mp3'
        break
      case 'エ':
        this.soundSrc = '/assets/sounds/sei-on/4.mp3'
        break
      case 'オ':
        this.soundSrc = '/assets/sounds/sei-on/5.mp3'
        break
      case 'カ':
        this.soundSrc = '/assets/sounds/sei-on/6.mp3'
        break
      case 'キ':
        this.soundSrc = '/assets/sounds/sei-on/7.mp3'
        break
      case 'ク':
        this.soundSrc = '/assets/sounds/sei-on/8.mp3'
        break
      case 'ケ':
        this.soundSrc = '/assets/sounds/sei-on/9.mp3'
        break
      case 'コ':
        this.soundSrc = '/assets/sounds/sei-on/10.mp3'
        break
      case 'ソース':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_A-SO_soosu.mp3'
        break
      case 'キウイ':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_A-SO_kiui.mp3'
        break
      case 'ケーキ':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_A-SO_keeki.mp3'
        break
      case 'めがねケース':
        this.soundSrc = '/assets/sounds/vocab-katakana/Katakana_A-SO_meganekeesu.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
