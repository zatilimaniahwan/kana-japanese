<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
        <tr v-for="sound in sounds" :key="sound">
          <td v-if="sound === 'akai'">
            <b-form-select
              :class="isValidQ1"
              v-model="q1"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">こい</p>
          </td>
          <td v-if="sound === 'ookii'">
            <b-form-select
              :class="isValidQ2"
              v-model="q2"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">あおい</p>
          </td>
          <td v-if="sound === 'oka'">
            <b-form-select
              :class="isValidQ3"
              v-model="q3"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">いけ</p>
          </td>
          <td v-if="sound === 'ue'">
            <b-form-select
              :class="isValidQ4"
              v-model="q4"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">うえ</p>
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
                <td v-if="sound === 'ike'">
            <b-form-select
              :class="isValidQ5"
              v-model="q5"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">おか</p>
          </td>
          <td v-if="sound === 'aoi'">
            <b-form-select
              :class="isValidQ6"
              v-model="q6"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">おおきい</p>
          </td>
          <td v-if="sound === 'koi'">
            <b-form-select
              :class="isValidQ7"
              v-model="q7"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">あかい</p>
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
      sounds: ['akai', 'ookii', 'oka', 'ue'],
      sounds2: ['ike', 'aoi', 'koi'],
      answers: [
        { value: 'ike', text: 'おか' },
        { value: 'ue', text: 'うえ' },
        { value: 'koi', text: 'あかい' },
        { value: 'aoi', text: 'おおきい' },
        { value: 'akai', text: 'こい' },
        { value: 'ookii', text: 'あおい' },
        { value: 'oka', text: 'いけ' }
      ],
      isValidQ1: '',
      isValidQ2: '',
      isValidQ3: '',
      isValidQ4: '',
      isValidQ5: '',
      isValidQ6: '',
      isValidQ7: ''
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
        this.q7 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'akai' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'ookii' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'oka' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'ue' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'ike' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'aoi' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'koi' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'koi':
        soundSrc = '/assets/sounds/hiraganaA-Ko/01.mp3'
        break
      case 'aoi':
        soundSrc = '/assets/sounds/hiraganaA-Ko/02.mp3'
        break
      case 'ike':
        soundSrc = '/assets/sounds/hiraganaA-Ko/03.mp3'
        break
      case 'ue':
        soundSrc = '/assets/sounds/hiraganaA-Ko/04.mp3'
        break
      case 'oka':
        soundSrc = '/assets/sounds/hiraganaA-Ko/05.mp3'
        break
      case 'ookii':
        soundSrc = '/assets/sounds/hiraganaA-Ko/06.mp3'
        break
      case 'akai':
        soundSrc = '/assets/sounds/hiraganaA-Ko/07.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
