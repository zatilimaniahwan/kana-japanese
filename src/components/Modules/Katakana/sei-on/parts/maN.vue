<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 col-lg-12 text-center">
      <b-row class="mt-2">
        <b-col class="mt-2" cols="2" v-for="syllable in syllabels" :key="syllable.original">
          <b-card class="mb-2">
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
     <modal class="syllable" :modalId="'modal-syllable-kata-mamo'">
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
          original: 'マ',
          romaji: 'ma'
        },
        {
          original: 'ミ',
          romaji: 'mi'
        },
        {
          original: 'ム',
          romaji: 'mu'
        },
        {
          original: 'メ',
          romaji: 'me'
        },
        {
          original: 'モ',
          romaji: 'mo'
        },
        {
          original: 'ヤ',
          romaji: 'ya'
        },
        {
          original: 'ユ',
          romaji: 'yu'
        },
        {
          original: 'ヨ',
          romaji: 'yo'
        },
        {
          original: 'ラ',
          romaji: 'ra'
        },
        {
          original: 'リ',
          romaji: 'ri'
        },
        {
          original: 'ル',
          romaji: 'ru'
        },
        {
          original: 'レ',
          romaji: 're'
        },
        {
          original: 'ロ',
          romaji: 'ro'
        },
        {
          original: 'ワ',
          romaji: 'wa'
        },
        {
          original: 'ヲ',
          romaji: 'o'
        },
        {
          original: 'ン',
          romaji: 'N'
        }
      ],
      imgSrc: ''
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'マ':
        this.imgSrc = '/assets/gif/kataMa-Mo/ma-min.gif'
        break
      case 'ミ':
        this.imgSrc = '/assets/gif/kataMa-Mo/mi-min.gif'
        break
      case 'ム':
        this.imgSrc = '/assets/gif/kataMa-Mo/mu-min.gif'
        break
      case 'メ':
        this.imgSrc = '/assets/gif/kataMa-Mo/me-min.gif'
        break
      case 'モ':
        this.imgSrc = '/assets/gif/kataMa-Mo/mo-min.gif'
        break
      case 'ヤ':
        this.imgSrc = '/assets/gif/kataYa-Yo/ya-min.gif'
        break
      case 'ユ':
        this.imgSrc = '/assets/gif/kataYa-Yo/yu-min.gif'
        break
      case 'ヨ':
        this.imgSrc = '/assets/gif/kataYa-Yo/yo-min.gif'
        break
      case 'ラ':
        this.imgSrc = '/assets/gif/kataRa-Ro/ra-min.gif'
        break
      case 'リ':
        this.imgSrc = '/assets/gif/kataRa-Ro/ri-min.gif'
        break
      case 'ル':
        this.imgSrc = '/assets/gif/kataRa-Ro/ru-min.gif'
        break
      case 'レ':
        this.imgSrc = '/assets/gif/kataRa-Ro/re-min.gif'
        break
      case 'ロ':
        this.imgSrc = '/assets/gif/kataRa-Ro/ro-min.gif'
        break
      case 'ワ':
        this.imgSrc = '/assets/gif/kataWa-On/wa-min.gif'
        break
      case 'ヲ':
        this.imgSrc = '/assets/gif/kataWa-On/on-min.gif'
        break
      case 'ン':
        this.imgSrc = '/assets/gif/kataWa-On/n-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-kata-mamo')
    },
    play (val) {
      switch (val) {
      case 'マ':
        this.soundSrc = '/assets/sounds/sei-on/31.mp3'
        break
      case 'ミ':
        this.soundSrc = '/assets/sounds/sei-on/32.mp3'
        break
      case 'ム':
        this.soundSrc = '/assets/sounds/sei-on/33.mp3'
        break
      case 'メ':
        this.soundSrc = '/assets/sounds/sei-on/34.mp3'
        break
      case 'モ':
        this.soundSrc = '/assets/sounds/sei-on/35.mp3'
        break
      case 'ヤ':
        this.soundSrc = '/assets/sounds/sei-on/36.mp3'
        break
      case 'ユ':
        this.soundSrc = '/assets/sounds/sei-on/37.mp3'
        break
      case 'ヨ':
        this.soundSrc = '/assets/sounds/sei-on/38.mp3'
        break
      case 'ラ':
        this.soundSrc = '/assets/sounds/sei-on/39.mp3'
        break
      case 'リ':
        this.soundSrc = '/assets/sounds/sei-on/40.mp3'
        break
      case 'ル':
        this.soundSrc = '/assets/sounds/sei-on/41.mp3'
        break
      case 'レ':
        this.soundSrc = '/assets/sounds/sei-on/42.mp3'
        break
      case 'ロ':
        this.soundSrc = '/assets/sounds/sei-on/43.mp3'
        break
      case 'ワ':
        this.soundSrc = '/assets/sounds/sei-on/44.mp3'
        break
      case 'ヲ':
        this.soundSrc = '/assets/sounds/sei-on/45.mp3'
        break
      case 'ン':
        this.soundSrc = '/assets/sounds/sei-on/46.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
