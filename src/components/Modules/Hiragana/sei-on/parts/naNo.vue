<template>
  <section class="number-area ptb_30">
     <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-nano
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-nano'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/sei-on/HiraganaNa.jpg"
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
      imgSrc: '',
      vocab: [
        {
          hiragana: 'かに',
          styleButton: {
            position: 'absolute',
            top: '95px',
            left: '700px'
          }
        },
        {
          hiragana: 'に',
          styleButton: {
            position: 'absolute',
            top: '125px',
            left: '50px'
          }
        },
        {
          hiragana: 'いぬ ',
          styleButton: {
            position: 'absolute',
            top: '290px',
            left: '380px'
          }
        },
        {
          hiragana: 'おなか',
          styleButton: {
            position: 'absolute',
            top: '420px',
            left: '1020px'
          }
        },
        {
          hiragana: 'おかね',
          styleButton: {
            position: 'absolute',
            top: '390px',
            left: '670px'
          }
        },
        {
          hiragana: 'たのしい',
          styleButton: {
            position: 'absolute',
            top: '500px',
            left: '200px'
          }
        }
      ]
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
      case 'かに':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiranaNo/Hiragana_NA_kani.mp3'
        break
      // eslint-disable-next-line no-duplicate-case
      case 'に':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiranaNo/Hiragana_NA_ni.mp3'
        break
      case 'いぬ ':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiranaNo/Hiragana_NA_inu.mp3'
        break
      case 'おなか':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiranaNo/Hiragana_NA_onaka.mp3'
        break
      case 'おかね':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiranaNo/Hiragana_NA_okane.mp3'
        break
      case 'たのしい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hiranaNo/Hiragana_NA_tanoshii.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
