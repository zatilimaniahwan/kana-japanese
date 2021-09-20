<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-dado
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-dado'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/daku-on/HiraganaDA.jpg"
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
          original: 'だ ',
          romaji: 'da'
        },
        {
          original: 'ぢ',
          romaji: 'ji'
        },
        {
          original: 'づ',
          romaji: 'zu'
        },
        {
          original: 'で',
          romaji: 'de'
        },
        {
          original: 'ど',
          romaji: 'do'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'だんご',
          styleButton: {
            position: 'absolute',
            top: '340px',
            left: '780px'
          }
        },
        {
          hiragana: 'まど',
          styleButton: {
            position: 'absolute',
            top: '280px',
            left: '90px'
          }
        },
        {
          hiragana: 'でんわ',
          styleButton: {
            position: 'absolute',
            top: '260px',
            left: '270px'
          }
        }
      ]
    }
  },
  methods: {
    play (val) {
      let soundSrc
      switch (val) {
      case 'だんご':
        soundSrc = '/assets/sounds/illustration-vocab/hiradaDo/Hiragana_DA_dango.mp3'
        break
      case 'まど':
        soundSrc = '/assets/sounds/illustration-vocab/hiradaDo/Hiragana_DA_mado.mp3'
        break
      case 'でんわ':
        soundSrc = '/assets/sounds/illustration-vocab/hiradaDo/Hiragana_DA_denwa.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
