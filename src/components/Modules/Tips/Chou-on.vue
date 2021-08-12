<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12">
      <b-card>
        <b-card-text>
          <p>{{ $t("learning.tips.chouOn.introduction") }}</p>
        </b-card-text>
      </b-card>
      <b-card class="mt-3">
        <b-card-text>
          <b-row>
            <b-col cols="2"> 4 tempo </b-col>
            <b-col cols="2">
              <a
                class="syllable"
                style="cursor:pointer;"
                @click="play('obasan')"
                ><u class="syllable"> おばさん</u>
              </a></b-col
            >
            <b-col cols="2">
              <strong>obasan</strong>
            </b-col>
            <b-col cols="2">
              {{ $t("learning.tips.chouOn.contents.obasan") }}
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="2"> 5 tempo </b-col>
            <b-col cols="2"
              ><a
                class="syllable"
                style="cursor:pointer;"
                @click="play('obaasan')"
                ><u class="syllable"> おばあさん</u></a
              >
            </b-col>
            <b-col cols="2">
              <strong>obaasan</strong>
            </b-col>
            <b-col>
              {{ $t("learning.tips.chouOn.contents.obaasan") }}
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card class="mt-3">
        <b-card-text>
          <h5>{{ $t("learning.tips.chouOn.subTitle") }}</h5>
          <b-card class="mt-2">
            <b-card-text>
              <b-row>
                <b-col cols="2"> a: </b-col>
                <b-col cols="2">
                  <a
                    class="syllable"
                    style="cursor:pointer;"
                    @click="play('okaasan')"
                    ><u class="syllable">おかあさん </u></a
                  ></b-col
                >
                <b-col cols="2">
                  <strong>okaasan</strong>
                </b-col>
                <b-col cols="2">
                  {{ $t("learning.tips.chouOn.contents.okaasan") }}
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2"> i: </b-col>
                <b-col cols="2"
                  ><a
                    class="syllable"
                    style="cursor:pointer;"
                    @click="play('oniisan')"
                    ><u class="syllable"> おにいさん</u></a
                  >
                </b-col>
                <b-col cols="2">
                  <strong>oniisan</strong>
                </b-col>
                <b-col cols="2">
                  {{ $t("learning.tips.chouOn.contents.oniisan") }}
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2"> u: </b-col>
                <b-col cols="2"
                  ><a
                    class="syllable"
                    style="cursor:pointer;"
                    @click="play('senshuu')"
                    ><u class="syllable"> せんしゅう</u></a
                  >
                </b-col>
                <b-col cols="2">
                  <strong>senshuu</strong>
                </b-col>
                <b-col cols="2">
                  {{ $t("learning.tips.chouOn.contents.senshuu") }}
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <b-col cols="2"
                  ><a
                    class="syllable"
                    style="cursor:pointer;"
                    @click="play('toukyou')"
                    ><u class="syllable">とうきょう</u></a
                  >
                </b-col>
                <b-col cols="2">
                  <strong>toukyou</strong>
                </b-col>
                <b-col cols="2">
                  Tokyo
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">e:</b-col>
                <b-col cols="2"
                  ><a
                    class="syllable"
                    style="cursor:pointer;"
                    @click="play('oneesan')"
                    ><u class="syllable"> おねえさん</u></a
                  >
                </b-col>
                <b-col cols="2">
                  <strong>oneesan</strong>
                </b-col>
                <b-col cols="2">
                  {{ $t("learning.tips.chouOn.contents.oneesan") }}
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">o:</b-col>
                <b-col cols="2">
                  <a
                    class="syllable"
                    style="cursor:pointer;"
                    @click="play('oosaka')"
                    ><u class="syllable">おおさか</u></a
                  >
                </b-col>
                <b-col cols="2">
                  <strong>oosaka</strong>
                </b-col>
                <b-col cols="2">
                  Osaka
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ChouOn',
  data () {
    return {
      soundSrc: ''
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'obasan':
        this.soundSrc = '/assets/sounds/Tips/obasan.mp3'
        break
      case 'obaasan':
        this.soundSrc = '/assets/sounds/Tips/obaasan.mp3'
        break
      case 'okaasan':
        this.soundSrc = '/assets/sounds/Tips/okaasan.mp3'
        break
      case 'oniisan':
        this.soundSrc = '/assets/sounds/Tips/oniisan.mp3'
        break
      case 'senshuu':
        this.soundSrc = '/assets/sounds/Tips/senshuu.mp3'
        break
      case 'toukyou':
        this.soundSrc = '/assets/sounds/Tips/toukyou.mp3'
        break
      case 'oneesan':
        this.soundSrc = '/assets/sounds/Tips/oneesan.mp3'
        break
      case 'oosaka':
        this.soundSrc = '/assets/sounds/Tips/oosaka.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
