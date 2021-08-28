<template>
  <section class="number-area ptb_30">
    <div class="mt-2 col-sm-6 col-md-12 col-lg-12 mb-3">
      <b-button class="bg-primary" v-b-modal.modal-illustration-waon
        >Vocabulary Illustration</b-button >
      <modal :modalId="'modal-illustration-waon'" :size="'xl'">
        <div slot="content">
          <b-img
            src="/assets/img/hiragana/sei-on/HiraganaWa.jpg"
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
       <modal class="syllable" :modalId="'modal-syllable-waon'">
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
          original: 'わ',
          romaji: 'wa'
        },
        {
          original: 'を',
          romaji: 'o'
        },
        {
          original: 'ん',
          romaji: 'N'
        }
      ],
      imgSrc: '',
      vocab: [
        {
          hiragana: 'わたし',
          styleButton: {
            position: 'absolute',
            top: '85px',
            left: '838px'
          }
        },
        {
          hiragana: 'せんせい',
          styleButton: {
            position: 'absolute',
            top: '520px',
            left: '175px'
          }
        }
      ]
    }
  },
  methods: {
    showModal (val) {
      switch (val) {
      case 'わ':
        this.imgSrc = '/assets/gif/hiraW-N-O/wa-min.gif'
        break
      case 'を':
        this.imgSrc = '/assets/gif/hiraW-N-O/o-min.gif'
        break
      case 'ん':
        this.imgSrc = '/assets/gif/hiraW-N-O/n-min.gif'
        break
      }
      this.$bvModal.show('modal-syllable-waon')
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'わ':
        soundSrc = '/assets/sounds/sei-on/44.mp3'
        break
      case 'を':
        soundSrc = '/assets/sounds/sei-on/45.mp3'
        break
      case 'ん':
        soundSrc = '/assets/sounds/sei-on/46.mp3'
        break
      case 'わたし':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirawaOn/Hiragana_WA_watashi.mp3'
        break
      case 'せんせい':
        soundSrc =
            '/assets/sounds/illustration-vocab/hirawaOn/Hiragana_WA_sensei.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
