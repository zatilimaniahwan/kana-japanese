<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'youfuku'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ようふく
                </p>
              </td>
              <td v-if="sound === 'me'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  め
                </p>
              </td>
              <td v-if="sound === 'yama'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  やま
                </p>
              </td>
              <td v-if="sound === 'yuki'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  ゆき
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
              <td v-if="sound === 'mimi'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">みみ</p>
              </td>
              <td v-if="sound === 'omoi'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">
                  おもい
                </p>
              </td>
              <td v-if="sound === 'nemui'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  ねむい
                </p>
              </td>
              <td v-if="sound === 'namae'">
                <b-form-select
                  :class="isValidQ8"
                  v-model="q8"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">
                  なまえ
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
      sounds: ['youfuku', 'me', 'yama', 'yuki'],
      sounds2: ['mimi', 'omoi', 'nemui', 'namae'],
      answers: [
        { value: 'omoi', text: 'おもい' },
        { value: 'yuki', text: 'ゆき' },
        { value: 'mimi', text: 'みみ' },
        { value: 'me', text: 'め' },
        { value: 'namae', text: 'なまえ' },
        { value: 'yama', text: 'やま' },
        { value: 'nemui', text: 'ねむい' },
        { value: 'youfuku', text: 'ようふく' }
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
      this.isValidQ1 = this.q1 === 'youfuku' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'me' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'yama' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'yuki' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'mimi' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'omoi' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'nemui' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'namae' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'youfuku':
        soundSrc = '/assets/sounds/hiraganaMa-Yo/01.mp3'
        break
      case 'me':
        soundSrc = '/assets/sounds/hiraganaMa-Yo/02.mp3'
        break
      case 'yama':
        soundSrc = '/assets/sounds/hiraganaMa-Yo/03.mp3'
        break
      case 'yuki':
        soundSrc = '/assets/sounds/hiraganaMa-Yo/04.mp3'
        break
      case 'mimi':
        soundSrc = '/assets/sounds/hiraganaMa-Yo/05.mp3'
        break
      case 'omoi':
        soundSrc = '/assets/sounds/hiraganaMa-Yo/06.mp3'
        break
      case 'nemui':
        soundSrc = '/assets/sounds/hiraganaMa-Yo/07.mp3'
        break
      case 'namae':
        soundSrc = '/assets/sounds/hiraganaMa-Yo/08.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
