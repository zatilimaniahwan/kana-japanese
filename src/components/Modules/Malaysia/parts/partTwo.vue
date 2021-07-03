<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 col-lg-12 text-center">
      <b-row>
        <b-col cols="2.5" style="margin-left: 380px; margin-top: 80px">
          <b-card>
            <b-card-text>
              <h5 class="syllable">マレーシアへ きてね！</h5>
              <p>{{ $t("learning.malaysia.desc") }}</p>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="3">
          <img
            class="img-fluid rounded mx-auto d-block mt-4"
            alt="Responsive image"
            src="/assets/img/malaysia/Asset 1.png"
            width="70%"
          />
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col class="mt-2" cols="3" v-for="image in images" :key="image.key">
          <b-card
            :img-src="image.url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
             <h4 class="syllable"><a  style="cursor:pointer;" @click="play(image.kana)"><u>{{ image.kana}}</u></a></h4>
             <h5 class="mt-2"> {{ image.label}}</h5>
             <p class="mt-2" v-if="image.hasOwnProperty('desc')">{{ image.desc }}</p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<script>
export default {
  name: 'partTwo',
  data () {
    return {
      images: [
        {
          kana: 'こま',
          label: this.$t('learning.malaysia.image1'),
          desc: this.$t('learning.malaysia.image_desc'),
          url: '/assets/img/malaysia/Asset 3.png'
        },
        {
          kana: 'ディムサム',
          label: this.$t('learning.malaysia.image2'),
          url: '/assets/img/malaysia/Asset 6.png'
        },
        {
          kana: 'バティック',
          label: this.$t('learning.malaysia.image3'),
          url: '/assets/img/malaysia/Asset 7.png'
        },
        {
          kana: 'マレーダンス',
          label: this.$t('learning.malaysia.image4'),
          url: '/assets/img/malaysia/Asset 8.png'
        },
        {
          kana: 'パサーマラム',
          label: this.$t('learning.malaysia.image5'),
          url: '/assets/img/malaysia/Asset 9.png'
        },
        {
          kana: 'ドドル',
          label: this.$t('learning.malaysia.image6'),
          url: '/assets/img/malaysia/Asset 10.png'
        },
        {
          kana: 'ワンタン',
          label: this.$t('learning.malaysia.image7'),
          url: '/assets/img/malaysia/Asset 11.png'
        },
        {
          kana: 'ブラチャン',
          label: this.$t('learning.malaysia.image8'),
          url: '/assets/img/malaysia/Asset 12.png'
        },
        {
          kana: 'ナシ　クラブ',
          label: this.$t('learning.malaysia.image9'),
          url: '/assets/img/malaysia/Asset 13.png'
        },
        {
          kana: 'クトゥパ',
          label: this.$t('learning.malaysia.image10'),
          url: '/assets/img/malaysia/Asset 14.png'
        },
        {
          kana: 'オタオタ',
          label: this.$t('learning.malaysia.image11'),
          url: '/assets/img/malaysia/Asset 15.png'
        },
        {
          kana: 'サテー',
          label: this.$t('learning.malaysia.image12'),
          url: '/assets/img/malaysia/Asset 16.png'
        }
      ]
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'こま':
        this.soundSrc = '/assets/sounds/Malaysia/koma.mp3'
        break
      case 'ディムサム':
        this.soundSrc = '/assets/sounds/Malaysia/dimsum.mp3'
        break
      case 'バティック':
        this.soundSrc = '/assets/sounds/Malaysia/batik.mp3'
        break
      case 'マレーダンス':
        this.soundSrc = '/assets/sounds/Malaysia/malay dance.mp3'
        break
      case 'パサーマラム':
        this.soundSrc = '/assets/sounds/Malaysia/pasar malam.mp3'
        break
      case 'ドドル':
        this.soundSrc = '/assets/sounds/Malaysia/dodol.mp3'
        break
      case 'ワンタン':
        this.soundSrc = '/assets/sounds/Malaysia/wantan.mp3'
        break
      case 'ブラチャン':
        this.soundSrc = '/assets/sounds/Malaysia/belacan.mp3'
        break
      case 'ナシ　クラブ':
        this.soundSrc = '/assets/sounds/Malaysia/nasi kerabu.mp3'
        break
      case 'クトゥパ':
        this.soundSrc = '/assets/sounds/Malaysia/ketupat.mp3'
        break
      case 'オタオタ':
        this.soundSrc = '/assets/sounds/Malaysia/otak-otak.mp3'
        break
      case 'サテー':
        this.soundSrc = '/assets/sounds/Malaysia/satey.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
<style scoped>
.card-img-top {
    max-height: 240px;
}
</style>
