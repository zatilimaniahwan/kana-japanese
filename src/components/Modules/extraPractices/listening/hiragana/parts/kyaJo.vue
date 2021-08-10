<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'jisho'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  じしょ
                </p>
              </td>
              <td v-if="sound === 'shukudai'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  しゅくだい
                </p>
              </td>
              <td v-if="sound === 'shashin'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  しゃしん
                </p>
              </td>
              <td v-if="sound === 'ningyou'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  にんぎょう
                </p>
              </td>
               <td v-if="sound === 'jinja'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  じんじゃ
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
              <td v-if="sound === 'kyoushi'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">きょうし</p>
              </td>
              <td v-if="sound === 'jugyou'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  じゅぎょう
                </p>
              </td>
              <td v-if="sound === 'kyuu'">
                <b-form-select
                  :class="isValidQ8"
                  v-model="q8"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">
                 きゅう
                </p>
              </td>
              <td v-if="sound === 'jouzu'">
                <b-form-select
                  :class="isValidQ9"
                  v-model="q9"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ9 === 'is-invalid'">
                  じょうず
                </p>
              </td>
              <td v-if="sound === 'kyaku'">
                <b-form-select
                  :class="isValidQ10"
                  v-model="q10"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ10 === 'is-invalid'">
                  きゃく
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
  name: 'Building',
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
      sounds: ['jisho', 'shukudai', 'shashin', 'ningyou', 'jinja'],
      sounds2: ['kyoushi', 'jugyou', 'kyuu', 'jouzu', 'kyaku'],
      answers: [
        { value: 'kyaku', text: 'きゃく' },
        { value: 'jinja', text: 'じんじゃ' },
        { value: 'jouzu', text: 'じょうず' },
        { value: 'ningyou', text: 'にんぎょう' },
        { value: 'kyuu', text: 'きゅう' },
        { value: 'shashin', text: 'しゃしん' },
        { value: 'jugyou', text: 'じゅぎょう' },
        { value: 'shukudai', text: 'しゅくだい' },
        { value: 'kyoushi', text: 'きょうし' },
        { value: 'jisho', text: 'じしょ' }
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
      isValidQ10: ''
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
        this.q10 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'jisho' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'shukudai' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'shashin' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'ningyou' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'jinja' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'kyoushi' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'jugyou' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'kyuu' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'jouzu' ? 'is-valid' : 'is-invalid'
      this.isValidQ10 = this.q10 === 'kyaku' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'jisho':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/01.mp3'
        break
      case 'shukudai':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/02.mp3'
        break
      case 'shashin':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/03.mp3'
        break
      case 'ningyou':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/04.mp3'
        break
      case 'jinja':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/05.mp3'
        break
      case 'kyoushi':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/06.mp3'
        break
      case 'jugyou':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/07.mp3'
        break
      case 'kyuu':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/08.mp3'
        break
      case 'jouzu':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/09.mp3'
        break
      case 'kyaku':
        soundSrc = '/assets/sounds/hiraganaKya-Jo/10.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
