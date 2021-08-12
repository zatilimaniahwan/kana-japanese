<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-4 col-md-4 col-lg-4 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'pen'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ペン
                </p>
              </td>
              <td v-if="sound === 'furaidopoteto'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  フライドポテト
                </p>
              </td>
              <td v-if="sound === 'supuun'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  スプーン
                </p>
              </td>
              <td v-if="sound === 'pan'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  パン
                </p>
              </td>
               <td v-if="sound === 'piano'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  ピアノ
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
      sounds: ['pen', 'furaidopoteto', 'supuun', 'pan', 'piano'],
      answers: [
        { value: 'piano', text: 'ピアノ' },
        { value: 'furaidopoteto', text: 'フライドポテト' },
        { value: 'pan', text: 'ボパン' },
        { value: 'pen', text: 'ペン' },
        { value: 'supuun', text: 'スプーン' }
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
      this.isValidQ1 = this.q1 === 'pen' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'furaidopoteto' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'supuun' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'pan' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'piano' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'pen':
        soundSrc = '/assets/sounds/katakanaPa-Po/01.mp3'
        break
      case 'furaidopoteto':
        soundSrc = '/assets/sounds/katakanaPa-Po/02.mp3'
        break
      case 'supuun':
        soundSrc = '/assets/sounds/katakanaPa-Po/03.mp3'
        break
      case 'pan':
        soundSrc = '/assets/sounds/katakanaPa-Po/04.mp3'
        break
      case 'piano':
        soundSrc = '/assets/sounds/katakanaPa-Po/05.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
