<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-4 col-md-4 col-lg-4 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'booru'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ボール
                </p>
              </td>
              <td v-if="sound === 'beruto'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  ベルト
                </p>
              </td>
              <td v-if="sound === 'banana'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  バナナ
                </p>
              </td>
              <td v-if="sound === 'terebi'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  テレビ
                </p>
              </td>
               <td v-if="sound === 'buutsu'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  ブーツ
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
      sounds: ['booru', 'beruto', 'banana', 'terebi', 'buutsu'],
      answers: [
        { value: 'beruto', text: 'ベルト' },
        { value: 'buutsu', text: 'ブーツ' },
        { value: 'booru', text: 'ボール' },
        { value: 'banana', text: 'バナナ' },
        { value: 'terebi', text: 'テレビ' }
      ],
      isValidQ1: '',
      isValidQ2: '',
      isValidQ3: '',
      isValidQ4: '',
      isValidQ5: ''
    }
  },
  computed: {
    emptyField () {
      return (
        this.q1 === null ||
        this.q2 === null ||
        this.q3 === null ||
        this.q4 === null ||
        this.q5 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'booru' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'beruto' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'banana' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'terebi' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'buutsu' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'booru':
        soundSrc = '/assets/sounds/katakanaBa-Bo/01.mp3'
        break
      case 'beruto':
        soundSrc = '/assets/sounds/katakanaBa-Bo/02.mp3'
        break
      case 'banana':
        soundSrc = '/assets/sounds/katakanaBa-Bo/03.mp3'
        break
      case 'terebi':
        soundSrc = '/assets/sounds/katakanaBa-Bo/04.mp3'
        break
      case 'buutsu':
        soundSrc = '/assets/sounds/katakanaBa-Bo/05.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
