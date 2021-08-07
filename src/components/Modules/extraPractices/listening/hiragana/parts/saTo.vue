<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'tokei'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  とけい
                </p>
              </td>
              <td v-if="sound === 'kutsushita'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  くつした
                </p>
              </td>
              <td v-if="sound === 'seki'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  せき
                </p>
              </td>
              <td v-if="sound === 'ichi'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  いち
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
              <td v-if="sound === 'te'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">て</p>
              </td>
              <td v-if="sound === 'kisoku'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">
                  きそく
                </p>
              </td>
              <td v-if="sound === 'sushi'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  すし
                </p>
              </td>
              <td v-if="sound === 'kasa'">
                <b-form-select
                  :class="isValidQ8"
                  v-model="q8"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">
                  けさ
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
      sounds: ['tokei', 'kutsushita', 'seki', 'ichi'],
      sounds2: ['te', 'kisoku', 'sushi', 'kasa'],
      answers: [
        { value: 'kutsushita', text: 'すし' },
        { value: 'te', text: 'いち' },
        { value: 'tokei', text: 'けさ' },
        { value: 'sushi', text: 'くつした' },
        { value: 'kasa', text: 'とけい' },
        { value: 'seki', text: 'きそく' },
        { value: 'kisoku', text: 'せき' },
        { value: 'ichi', text: 'て' }
      ],
      isValidQ1: '',
      isValidQ2: '',
      isValidQ3: '',
      isValidQ4: '',
      isValidQ5: '',
      isValidQ6: '',
      isValidQ7: '',
      isValidQ8: ''
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
        this.q8 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'tokei' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'kutsushita' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'seki' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'ichi' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'te' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'kisoku' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'sushi' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'kasa' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'tokei':
        soundSrc = '/assets/sounds/hiraganaSa-To/01.mp3'
        break
      case 'kutsushita':
        soundSrc = '/assets/sounds/hiraganaSa-To/02.mp3'
        break
      case 'seki':
        soundSrc = '/assets/sounds/hiraganaSa-To/03.mp3'
        break
      case 'ichi':
        soundSrc = '/assets/sounds/hiraganaSa-To/04.mp3'
        break
      case 'te':
        soundSrc = '/assets/sounds/hiraganaSa-To/05.mp3'
        break
      case 'kisoku':
        soundSrc = '/assets/sounds/hiraganaSa-To/06.mp3'
        break
      case 'sushi':
        soundSrc = '/assets/sounds/hiraganaSa-To/07.mp3'
        break
      case 'kasa':
        soundSrc = '/assets/sounds/hiraganaSa-To/08.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
