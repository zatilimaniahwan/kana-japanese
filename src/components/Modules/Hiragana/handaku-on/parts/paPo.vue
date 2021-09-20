<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-papo
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-papo'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/daku-on/HiraganaPA.jpg"
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
          original: 'ぱ',
          romaji: 'pa'
        },
        {
          original: 'ぴ ',
          romaji: 'pi'
        },
        {
          original: ' ぷ',
          romaji: 'pu'
        },
        {
          original: 'ぺ',
          romaji: 'pe'
        },
        {
          original: 'ぽ',
          romaji: 'po'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'えんぴつ',
          styleButton: {
            position: 'absolute',
            top: '490px',
            left: '60px'
          }
        },
        {
          hiragana: 'さんぽ',
          styleButton: {
            position: 'absolute',
            top: '250px',
            left: '230px'
          }
        },
        {
          hiragana: 'しんぱい',
          styleButton: {
            position: 'absolute',
            top: '280px',
            left: '920px'
          }
        }
      ]
    }
  },
  methods: {
    play (val) {
      let soundSrc
      switch (val) {
      case 'えんぴつ':
        soundSrc = '/assets/sounds/illustration-vocab/hirabaPa/Hiragana_BA-PA_enpitsu.mp3'
        break
      case 'さんぽ':
        soundSrc = '/assets/sounds/illustration-vocab/hirabaPa/Hiragana_BA-PA_sanpo.mp3'
        break
      case 'しんぱい':
        soundSrc = '/assets/sounds/illustration-vocab/hirabaPa/Hiragana_BA-PA_shinpai.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
