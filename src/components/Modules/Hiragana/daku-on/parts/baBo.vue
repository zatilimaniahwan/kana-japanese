<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-babo
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-babo'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/daku-on/HiraganaBa.jpg"
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
          original: 'ば',
          romaji: 'ba'
        },
        {
          original: 'び',
          romaji: 'bi'
        },
        {
          original: 'ぶ',
          romaji: 'bu'
        },
        {
          original: 'べ',
          romaji: 'be'
        },
        {
          original: 'ぼ',
          romaji: 'bo'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'かばん',
          styleButton: {
            position: 'absolute',
            top: '500px',
            left: '340px'
          }
        },
        {
          hiragana: 'くちべに',
          styleButton: {
            position: 'absolute',
            top: '560px',
            left: '190px'
          }
        },
        {
          hiragana: 'かびん',
          styleButton: {
            position: 'absolute',
            top: '390px',
            left: '120px'
          }
        },
        {
          hiragana: 'さんぽ',
          styleButton: {
            position: 'absolute',
            top: '260px',
            left: '230px'
          }
        },
        {
          hiragana: 'あぶない',
          styleButton: {
            position: 'absolute',
            top: '560px',
            left: '800px'
          }
        }
      ]
    }
  },
  methods: {
    play (val) {
      let soundSrc
      switch (val) {
      case 'かばん':
        soundSrc = '/assets/sounds/illustration-vocab/hirabaPa/Hiragana_BA-PA_kaban.mp3'
        break
      case 'くちべに':
        soundSrc = '/assets/sounds/illustration-vocab/hirabaPa/Hiragana_BA-PA_kuchibeni.mp3'
        break
      case 'かびん':
        soundSrc = ''
        break
      case 'さんぽ':
        soundSrc = '/assets/sounds/illustration-vocab/hirabaPa/Hiragana_BA-PA_boushi.mp3'
        break
      case 'あぶない':
        soundSrc = '/assets/sounds/illustration-vocab/hirabaPa/Hiragana_BA-PA_abunai.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
