<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'choumiryou'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ちょうみりょう
                </p>
              </td>
              <td v-if="sound === 'ryuugakusei'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  りゅうがくせい
                </p>
              </td>
              <td v-if="sound === 'byou'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  びょう
                </p>
              </td>
              <td v-if="sound === 'hyaku'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  ひゃく
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
              <td v-if="sound === 'gyuunyu'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  ぎゅうにゅう
                </p>
              </td>
              <td v-if="sound === 'chuumon'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">
                  ちゅうもん
                </p>
              </td>
              <td v-if="sound === 'ocha'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  おちゃ
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
      sounds: ['choumiryou', 'ryuugakusei', 'byou', 'hyaku'],
      sounds2: ['gyuunyuu', 'chuumon', 'ocha'],
      answers: [
        { value: 'ocha', text: 'おちゃ' },
        { value: 'hyaku', text: 'ひゃく' },
        { value: 'chuumon', text: 'ちゅうもん' },
        { value: 'byou', text: 'びょう' },
        { value: 'gyuunyuu', text: 'ぎゅうにゅう' },
        { value: 'ryuugakusei', text: 'りゅうがくせい' },
        { value: 'choumiryou', text: 'ちょうみりょう' }
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
      this.isValidQ1 = this.q1 === 'choumiryou' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'ryuugakusei' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'byou' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'hyaku' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'gyuunyuu' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'chuumon' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'ocha' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'choumiryou':
        soundSrc = '/assets/sounds/hiraganaCha-Ryo/01.mp3'
        break
      case 'ryuugakusei':
        soundSrc = '/assets/sounds/hiraganaCha-Ryo/02.mp3'
        break
      case 'byou':
        soundSrc = '/assets/sounds/hiraganaCha-Ryo/03.mp3'
        break
      case 'hyaku':
        soundSrc = '/assets/sounds/hiraganaCha-Ryo/04.mp3'
        break
      case 'gyuunyuu':
        soundSrc = '/assets/sounds/hiraganaCha-Ryo/05.mp3'
        break
      case 'chuumon':
        soundSrc = '/assets/sounds/hiraganaCha-Ryo/06.mp3'
        break
      case 'ocha':
        soundSrc = '/assets/sounds/hiraganaCha-Ryo/07.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
