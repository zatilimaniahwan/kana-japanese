<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12">
      <b-card class="mt-3">
        <b-card-text>
          <p>[m]{{ $t("learning.tips.hatsuOn.m.description") }}</p>
          <b-row class="mt-3">
            <b-col
              ><p class="syllable">
                [ば ba], [びbi], [ぶbu], [べbe], [ぼbo]
              </p></b-col
            >
          </b-row>
          <b-row class="mt-3">
            <b-col
              ><p class="syllable">
                [ぱ pa], [ぴpi], [ぷpu], [ぺpe], [ぽpo]
              </p></b-col
            >
          </b-row>
          <b-row class="mt-3">
            <b-col
              ><p class="syllable">
                [まma], [みmi],[むmu], [めme], [もmo]
              </p></b-col
            >
          </b-row>
          <b-row class="mt-4">
            <b-col cols="2">
              <a style="cursor:pointer;" @click="play('ampan')"
                ><u class="syllable">あんぱん</u></a
              ></b-col
            >
            <b-col cols="2"><strong>ampan</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.m.ampan") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"
              ><a style="cursor:pointer;" @click="play('shimbun')"
                ><u class="syllable"> しんぶん</u></a
              ></b-col
            >
            <b-col cols="2"><strong>shimbun</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.m.shimbun") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"
              ><a style="cursor:pointer;" @click="play('samma')"
                ><u class="syllable">さんま</u></a
              ></b-col
            >
            <b-col cols="2"><strong>samma</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.m.samma") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card class="mt-3">
        <b-card-text>
          <p>[ng]{{ $t("learning.tips.hatsuOn.ng.description") }}</p>
          <b-row class="mt-3">
            <b-col
              ><p class="syllable">
                [かka], [きki], [くku], [けke], [こko]
              </p></b-col
            >
          </b-row>
          <b-row class="mt-3">
            <b-col
              ><p class="syllable">
                [がga], [ぎgi], [ぐgu], [げge], [ごgo]
              </p></b-col
            >
          </b-row>
          <b-row class="mt-4">
            <b-col cols="2">
              <a style="cursor:pointer;" @click="play('kongkai')"
                ><u class="syllable">こんかい</u></a
              ></b-col
            >
            <b-col cols="2"><strong>kongkai</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.ng.kongkai") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"
              ><a style="cursor:pointer;" @click="play('anggai')"
                ><u class="syllable">あんがい</u></a
              ></b-col
            >
            <b-col cols="2"><strong>anggai</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.ng.anggai") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"
              ><a style="cursor:pointer;" @click="play('ringgo')"
                ><u class="syllable">りんご</u></a
              ></b-col
            >
            <b-col cols="2"><strong>ringgo</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.ng.ringgo") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card class="mt-3">
        <b-card-text>
          <p>[n]{{ $t("learning.tips.hatsuOn.ng.description") }}</p>
          <b-row class="mt-4">
            <b-col cols="2">
              <a style="cursor:pointer;" @click="play('anshin')"
                ><u class="syllable">あんしん</u></a
              ></b-col
            >
            <b-col cols="2"><strong>anshin</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.n.anshin") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"
              ><a style="cursor:pointer;" @click="play('kantan')"
                ><u class="syllable"> かんたん</u></a
              ></b-col
            >
            <b-col cols="2"><strong>kantan</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.n.kantan") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"
              ><a style="cursor:pointer;" @click="play('sensei')"
                ><u class="syllable">せんせい</u></a
              ></b-col
            >
            <b-col cols="2"><strong>sensei</strong> </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.hatsuOn.n.sensei") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HatsuOn',
  data () {
    return {
      soundSrc: ''
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'ampan':
        this.soundSrc = '/assets/sounds/Tips/ampan.mp3'
        break
      case 'shimbun':
        this.soundSrc = '/assets/sounds/Tips/shimbun.mp3'
        break
      case 'samma':
        this.soundSrc = '/assets/sounds/Tips/samma.mp3'
        break
      case 'kongkai':
        this.soundSrc = '/assets/sounds/Tips/kongkai.mp3'
        break
      case 'anggai':
        this.soundSrc = '/assets/sounds/Tips/anggai.mp3'
        break
      case 'ringgo':
        this.soundSrc = '/assets/sounds/Tips/ringgo.mp3'
        break
      case 'anshin':
        this.soundSrc = '/assets/sounds/Tips/anshin.mp3'
        break
      case 'kantan':
        this.soundSrc = '/assets/sounds/Tips/kantan.mp3'
        break
      case 'sensei':
        this.soundSrc = '/assets/sounds/Tips/sensei.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
