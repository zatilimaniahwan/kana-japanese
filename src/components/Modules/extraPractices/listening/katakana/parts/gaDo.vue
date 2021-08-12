<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'rajio'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ラジオ
                </p>
              </td>
              <td v-if="sound === 'reji'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  レジ
                </p>
              </td>
              <td v-if="sound === 'doonatsu'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  ドーナツ
                </p>
              </td>
              <td v-if="sound === 'zero'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  ノート
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
              <td v-if="sound === 'mangoo'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  マンゴー
                </p>
              </td>
              <td v-if="sound === 'gitaa'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">
                  ギター
                </p>
              </td>
              <td v-if="sound === 'gamu'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  ガム
                </p>
              </td>
               <td v-if="sound === 'sandaru'">
                <b-form-select
                  :class="isValidQ8"
                  v-model="q8"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">
                  サンダル
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
      sounds: ['rajio', 'reji', 'doonatsu', 'zero'],
      sounds2: ['mangoo', 'gitaa', 'gamu', 'sandaru'],
      answers: [
        { value: 'sandaru', text: 'サンダル' },
        { value: 'zero', text: 'ゼロ' },
        { value: 'gamu', text: 'ガム' },
        { value: 'doonatsu', text: 'ドーナツ' },
        { value: 'gitaa', text: 'ギター' },
        { value: 'reji', text: 'レジ' },
        { value: 'mangoo', text: 'マンゴー' },
        { value: 'rajio', text: 'アラジオ' }
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
      this.isValidQ1 = this.q1 === 'rajio' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'reji' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'doonatsu' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'zero' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'mangoo' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'gitaa' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'gamu' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'sandaru' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'rajio':
        soundSrc = '/assets/sounds/katakanaGa-Do/01.mp3'
        break
      case 'reji':
        soundSrc = '/assets/sounds/katakanaGa-Do/02.mp3'
        break
      case 'doonatsu':
        soundSrc = '/assets/sounds/katakanaGa-Do/03.mp3'
        break
      case 'zero':
        soundSrc = '/assets/sounds/katakanaGa-Do/04.mp3'
        break
      case 'mangoo':
        soundSrc = '/assets/sounds/katakanaGa-Do/05.mp3'
        break
      case 'gitaa':
        soundSrc = '/assets/sounds/katakanaGa-Do/06.mp3'
        break
      case 'gamu':
        soundSrc = '/assets/sounds/katakanaGa-Do/07.mp3'
        break
      case 'sandaru':
        soundSrc = '/assets/sounds/katakanaGa-Do/08.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
