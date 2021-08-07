<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'hoshii'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ほしい
                </p>
              </td>
              <td v-if="sound === 'hana'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  はな
                </p>
              </td>
              <td v-if="sound === 'tanoshii'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  たのしい
                </p>
              </td>
              <td v-if="sound === 'hito'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  ひと
                </p>
              </td>
               <td v-if="sound === 'hei'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  へい
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
              <td v-if="sound === 'fuutou'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">ふうとう</p>
              </td>
              <td v-if="sound === 'inu'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  いぬ
                </p>
              </td>
              <td v-if="sound === 'ni'">
                <b-form-select
                  :class="isValidQ8"
                  v-model="q8"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">
                  に
                </p>
              </td>
              <td v-if="sound === 'kani'">
                <b-form-select
                  :class="isValidQ9"
                  v-model="q9"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ9 === 'is-invalid'">
                  かに
                </p>
              </td>
              <td v-if="sound === 'okane'">
                <b-form-select
                  :class="isValidQ10"
                  v-model="q10"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ10 === 'is-invalid'">
                  おかね
                </p>
              </td>
                <td v-if="sound === 'onaka'">
                <b-form-select
                  :class="isValidQ11"
                  v-model="q11"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ11 === 'is-invalid'">
                  おなか
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
      q11: null,
      sounds: ['onaka', 'okane', 'kani', 'ni', 'inu'],
      sounds2: ['fuutou', 'hei', 'hito', 'tanoshii', 'hana', 'hoshii'],
      answers: [
        { value: 'hoshii', text: 'ほしい' },
        { value: 'ni', text: 'に' },
        { value: 'fuutou', text: 'ふうとう' },
        { value: 'onaka', text: 'おなか' },
        { value: 'kani', text: 'かに' },
        { value: 'tanoshii', text: 'たのしい' },
        { value: 'inu', text: 'いぬ' },
        { value: 'hei', text: 'へい' },
        { value: 'hana', text: 'はな' },
        { value: 'hito', text: 'ひと' }
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
      this.isValidQ1 = this.q1 === 'hoshii' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'hana' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'tanoshii' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'hito' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'hei' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'fuuotou' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'inu' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'ni' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'kani' ? 'is-valid' : 'is-invalid'
      this.isValidQ10 = this.q10 === 'okane' ? 'is-valid' : 'is-invalid'
      this.isValidQ11 = this.q11 === 'onaka' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'hoshii':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/01.mp3'
        break
      case 'hana':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/02.mp3'
        break
      case 'tanoshii':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/03.mp3'
        break
      case 'hito':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/04.mp3'
        break
      case 'hei':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/05.mp3'
        break
      case 'fuutou':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/06.mp3'
        break
      case 'inu':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/07.mp3'
        break
      case 'ni':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/08.mp3'
        break
      case 'kani':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/09.mp3'
        break
      case 'okane':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/10.mp3'
        break
      case 'onaka':
        soundSrc = '/assets/sounds/hiraganaNa-Ho/11.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
