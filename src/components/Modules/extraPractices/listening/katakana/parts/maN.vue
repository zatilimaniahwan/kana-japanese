<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'sofutokuriimu'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ソフトクリーム
                </p>
              </td>
              <td v-if="sound === 'raamen'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  ラーメン
                </p>
              </td>
              <td v-if="sound === 'ramune'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  ラムネ
                </p>
              </td>
              <td v-if="sound === 'hiiru'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  ヒール
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
              <td v-if="sound === 'toire'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  トイレ
                </p>
              </td>
              <td v-if="sound === 'haamonika'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">
                  ハーモニカ
                </p>
              </td>
              <td v-if="sound === 'hankachi'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  ハンカチ
                </p>
              </td>
              <td v-if="sound === 'rooraasukeeto'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  ローラースケート
                </p>
              </td>
              <td v-if="sound === 'mafuraa'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  マフラー
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
      sounds: ['sofutokuriimu', 'raamen', 'ramune', 'hiiru'],
      sounds2: ['toire', 'haamonika', 'hankachi', 'rooraasukeeto', 'mafuraa'],
      answers: [
        { value: 'mafuraa', text: 'マフラー' },
        { value: 'hiiru', text: 'ヒール' },
        { value: 'rooraasukeeto', text: 'ローラースケート' },
        { value: 'ramune', text: 'ラムネ' },
        { value: 'hankachi', text: 'ハンカチ' },
        { value: 'raamen', text: 'ハーモニカ' },
        { value: 'haamonika', text: 'ラーメン' },
        { value: 'sofutokuriimu', text: 'ソフトクリーム' },
        { value: 'toire', text: 'トイレ' }
      ],
      isValidQ1: '',
      isValidQ2: '',
      isValidQ3: '',
      isValidQ4: '',
      isValidQ5: '',
      isValidQ6: '',
      isValidQ7: '',
      isValidQ8: '',
      isValidQ9: ''
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
        this.q9 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'sofutokuriimu' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'raamen' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'ramune' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'hiiru' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'toire' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'haamonika' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'hankachi' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'rooraasukeeto' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'mafuraa' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'sofutokuriimu':
        soundSrc = '/assets/sounds/katakanaMa-N/01.mp3'
        break
      case 'raamen':
        soundSrc = '/assets/sounds/katakanaMa-N/02.mp3'
        break
      case 'ramune':
        soundSrc = '/assets/sounds/katakanaMa-N/03.mp3'
        break
      case 'hiiru':
        soundSrc = '/assets/sounds/katakanaMa-N/04.mp3'
        break
      case 'toire':
        soundSrc = '/assets/sounds/katakanaMa-N/05.mp3'
        break
      case 'haamonika':
        soundSrc = '/assets/sounds/katakanaMa-N/06.mp3'
        break
      case 'hankachi':
        soundSrc = '/assets/sounds/katakanaMa-N/07.mp3'
        break
      case 'rooraasukeeto':
        soundSrc = '/assets/sounds/katakanaMa-N/08.mp3'
        break
      case 'mafuraa':
        soundSrc = '/assets/sounds/katakanaMa-N/09.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
