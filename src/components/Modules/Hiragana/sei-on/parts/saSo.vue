<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-saso
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-saso'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/sei-on/HiraganaSA.jpg"
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
        <modal class="syllable" :modalId="'modal-syllable-saso'">
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
          original: 'さ',
          romaji: 'sa'
        },
        {
          original: 'し',
          romaji: 'shi'
        },
        {
          original: 'す',
          romaji: 'su'
        },
        {
          original: 'せ',
          romaji: 'se'
        },
        {
          original: 'そ',
          romaji: 'so'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'きそく',
          styleButton: {
            position: 'absolute',
            top: '475px',
            left: '900px'
          }
        },
        {
          hiragana: 'かさ',
          styleButton: {
            position: 'absolute',
            top: '300px',
            left: '400px'
          }
        },
        {
          hiragana: 'すし',
          styleButton: {
            position: 'absolute',
            top: '550px',
            left: '70px'
          }
        },
        {
          hiragana: 'せき',
          styleButton: {
            position: 'absolute',
            top: '360px',
            left: '230px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'さ':
        this.imgSrc = '/assets/gif/hiraSa-So/sa-min.gif'
        break
      case 'し':
        this.imgSrc = '/assets/gif/hiraSa-So/shi-min.gif'
        break
      case 'す':
        this.imgSrc = '/assets/gif/hiraSa-So/su-min.gif'
        break
      case 'せ':
        this.imgSrc = '/assets/gif/hiraSa-So/se-min.gif'
        break
      case 'そ':
        this.imgSrc = '/assets/gif/hiraSa-So/so-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-saso')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'さ':
        soundSrc = '/assets/sounds/sei-on/11.mp3'
        break
      case 'し':
        soundSrc = '/assets/sounds/sei-on/12.mp3'
        break
      case 'す':
        soundSrc = '/assets/sounds/sei-on/13.mp3'
        break
      case 'せ':
        soundSrc = '/assets/sounds/sei-on/14.mp3'
        break
      case 'そ':
        soundSrc = '/assets/sounds/sei-on/15.mp3'
        break
      case 'きそく':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirasaSo/Hiragana_SA_kisoku.mp3'
        break
      case 'かさ':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirasaSo/Hiragana_SA_kasa.mp3'
        break
      case 'すし':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirasaSo/Hiragana_SA_sushi.mp3'
        break
      case 'せき':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirasaSo/Hiragana_SA_seki.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
