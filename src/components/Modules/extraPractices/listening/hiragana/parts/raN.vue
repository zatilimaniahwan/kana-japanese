<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
        <tr v-for="sound in sounds" :key="sound">
          <td v-if="sound === 'kirei'">
            <b-form-select
              :class="isValidQ1"
              v-model="q1"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">きれい</p>
          </td>
          <td v-if="sound === 'sora'">
            <b-form-select
              :class="isValidQ2"
              v-model="q2"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">そら</p>
          </td>
          <td v-if="sound === 'maru'">
            <b-form-select
              :class="isValidQ3"
              v-model="q3"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">まる</p>
          </td>
          <td v-if="sound === 'watashi'">
            <b-form-select
              :class="isValidQ4"
              v-model="q4"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">わたし</p>
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
                <td v-if="sound === 'tori'">
            <b-form-select
              :class="isValidQ5"
              v-model="q5"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">とり</p>
          </td>
          <td v-if="sound === 'sensei'">
            <b-form-select
              :class="isValidQ6"
              v-model="q6"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">せんせい</p>
          </td>
          <td v-if="sound === 'shiroi'">
            <b-form-select
              :class="isValidQ7"
              v-model="q7"
              :options="answers"
              size="sm"
            ></b-form-select>
            <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">しろい</p>
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
      sounds: ['kirei', 'sora', 'maru', 'watashi'],
      sounds2: ['tori', 'sensei', 'shiroi'],
      answers: [
        { value: 'sensei', text: 'せんせい' },
        { value: 'watashi', text: 'わたし' },
        { value: 'tori', text: 'とり' },
        { value: 'maru', text: 'まる' },
        { value: 'shiroi', text: 'しろい' },
        { value: 'kirei', text: 'きれい' },
        { value: 'sora', text: 'そら' }
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
      this.isValidQ1 = this.q1 === 'kirei' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'sora' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'maru' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'watashi' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'tori' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'sensei' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'shiroi' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'kirei':
        soundSrc = '/assets/sounds/hiraganaRa-N/01.mp3'
        break
      case 'sora':
        soundSrc = '/assets/sounds/hiraganaRa-N/02.mp3'
        break
      case 'maru':
        soundSrc = '/assets/sounds/hiraganaRa-N/03.mp3'
        break
      case 'watashi':
        soundSrc = '/assets/sounds/hiraganaRa-N/04.mp3'
        break
      case 'tori':
        soundSrc = '/assets/sounds/hiraganaRa-N/05.mp3'
        break
      case 'sensei':
        soundSrc = '/assets/sounds/hiraganaRa-N/06.mp3'
        break
      case 'shiroi':
        soundSrc = '/assets/sounds/hiraganaRa-N/07.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
