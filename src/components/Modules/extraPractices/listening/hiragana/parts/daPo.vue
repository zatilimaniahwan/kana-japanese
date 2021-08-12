<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'sampo'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  さんぽ
                </p>
              </td>
              <td v-if="sound === 'enpitsu'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  えんぴつ
                </p>
              </td>
              <td v-if="sound === 'shinpai'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  しんぱい
                </p>
              </td>
              <td v-if="sound === 'boushi'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  ぼうし
                </p>
              </td>
               <td v-if="sound === 'kuchibeni'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  くちべに
                </p>
              </td>
              <td width="20%">
                <b-button class="bg-dark" @click="play(sound)"
                  ><em class="mdi mdi-volume-high"></em
                ></b-button>
              </td>
            </tr>
          </table>
        </b-col>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds2" :key="sound">
              <td v-if="sound === 'abunai'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">あぶない</p>
              </td>
              <td v-if="sound === 'kabin'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  かびん
                </p>
              </td>
              <td v-if="sound === 'kaban'">
                <b-form-select
                  :class="isValidQ8"
                  v-model="q8"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">
                  かばん
                </p>
              </td>
              <td v-if="sound === 'mado'">
                <b-form-select
                  :class="isValidQ9"
                  v-model="q9"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ9 === 'is-invalid'">
                  まど
                </p>
              </td>
              <td v-if="sound === 'denwa'">
                <b-form-select
                  :class="isValidQ10"
                  v-model="q10"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ10 === 'is-invalid'">
                  でんわ
                </p>
              </td>
                <td v-if="sound === 'yubi'">
                <b-form-select
                  :class="isValidQ11"
                  v-model="q11"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ11 === 'is-invalid'">
                  ゆび
                </p>
              </td>
              <td width="20%">
            <b-button class="bg-dark" @click="play(sound)"
              ><em class="mdi mdi-volume-high"></em
            ></b-button>
          </td>
            </tr>
          </table>
        </b-col>
      </b-row>
      <b-button
        class="bg-primary mt-3"
        @click="checkAnswer"
        :disabled="emptyField"
        >{{ $t("learning.writingModule.building.button") }}</b-button
      >
    </b-container>
  </section>
</template>
<script>
export default {
  data () {
    return {
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      q5: null,
      q6: null,
      q7: null,
      q8: null,
      q9: null,
      q10: null,
      q11: null,
      sounds: ['sampo', 'enpitsu', 'shinpai', 'boushi', 'kuchibeni'],
      sounds2: ['abunai', 'kabin', 'kaban', 'mado', 'denwa', 'yubi'],
      answers: [
        { value: 'yubi', text: 'ゆび' },
        { value: 'kuchibeni', text: 'くちべに' },
        { value: 'denwa', text: 'ふうとう' },
        { value: 'boushi', text: 'おなか' },
        { value: 'mado', text: 'かに' },
        { value: 'shinpai', text: 'たのしい' },
        { value: 'kaban', text: 'いぬ' },
        { value: 'enpitsu', text: 'へい' },
        { value: 'kabin', text: 'はな' },
        { value: 'sampo', text: 'ひと' },
        { value: 'abunai', text: 'ひと' }
      ],
      isValidQ1: '',
      isValidQ2: '',
      isValidQ3: '',
      isValidQ4: '',
      isValidQ5: '',
      isValidQ6: '',
      isValidQ7: '',
      isValidQ8: '',
      isValidQ9: '',
      isValidQ10: '',
      isValidQ11: ''
    }
  },
  computed: {
    emptyField () {
      return (
        this.q1 === null ||
        this.q2 === null ||
        this.q3 === null ||
        this.q4 === null ||
        this.q5 === null ||
        this.q6 === null ||
        this.q7 === null ||
        this.q8 === null ||
        this.q9 === null ||
        this.q10 === null ||
        this.q11 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'sampo' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'enpitsu' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'shinpai' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'boushi' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'kuchibeni' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'abunai' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'kabin' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'kaban' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'mado' ? 'is-valid' : 'is-invalid'
      this.isValidQ10 = this.q10 === 'denwa' ? 'is-valid' : 'is-invalid'
      this.isValidQ11 = this.q11 === 'yubi' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'sampo':
        soundSrc = '/assets/sounds/hiraganaDa-Po/01.mp3'
        break
      case 'enpitsu':
        soundSrc = '/assets/sounds/hiraganaDa-Po/02.mp3'
        break
      case 'shinpai':
        soundSrc = '/assets/sounds/hiraganaDa-Po/03.mp3'
        break
      case 'boushi':
        soundSrc = '/assets/sounds/hiraganaDa-Po/04.mp3'
        break
      case 'kuchibeni':
        soundSrc = '/assets/sounds/hiraganaDa-Po/05.mp3'
        break
      case 'abunai':
        soundSrc = '/assets/sounds/hiraganaDa-Po/06.mp3'
        break
      case 'kabin':
        soundSrc = '/assets/sounds/hiraganaDa-Po/07.mp3'
        break
      case 'kaban':
        soundSrc = '/assets/sounds/hiraganaDa-Po/08.mp3'
        break
      case 'mado':
        soundSrc = '/assets/sounds/hiraganaDa-Po/09.mp3'
        break
      case 'denwa':
        soundSrc = '/assets/sounds/hiraganaDa-Po/10.mp3'
        break
      case 'yubi':
        soundSrc = '/assets/sounds/hiraganaDa-Po/11.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
