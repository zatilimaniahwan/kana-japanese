<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'haizara'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  はいざら
                </p>
              </td>
              <td v-if="sound === 'megane'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  めがね
                </p>
              </td>
              <td v-if="sound === 'jikan'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  じかん
                </p>
              </td>
              <td v-if="sound === 'genki'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  げんき
                </p>
              </td>
               <td v-if="sound === 'chizu'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  ちず
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
              <td v-if="sound === 'iriguchi'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">いりぐち</p>
              </td>
              <td v-if="sound === 'kaze'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  かぜ
                </p>
              </td>
              <td v-if="sound === 'kagi'">
                <b-form-select
                  :class="isValidQ8"
                  v-model="q8"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">
                  かぎ
                </p>
              </td>
              <td v-if="sound === 'kazoku'">
                <b-form-select
                  :class="isValidQ9"
                  v-model="q9"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ9 === 'is-invalid'">
                  かぞく
                </p>
              </td>
              <td v-if="sound === 'go'">
                <b-form-select
                  :class="isValidQ10"
                  v-model="q10"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ10 === 'is-invalid'">
                  ご
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
      sounds: ['haizara', 'megane', 'jikan', 'genki', 'chizu'],
      sounds2: ['iriguchi', 'kaze', 'kagi', 'kazoku', 'go'],
      answers: [
        { value: 'chizu', text: 'ちず' },
        { value: 'go', text: 'ご' },
        { value: 'haizara', text: 'はいざら' },
        { value: 'iriguchi', text: 'いりぐち' },
        { value: 'jikan', text: 'じかん' },
        { value: 'kagi', text: 'かぎ' },
        { value: 'megane', text: 'めがね' },
        { value: 'kaze', text: 'かぜ' },
        { value: 'genki', text: 'げんき' },
        { value: 'kazoku', text: 'かぞく' }
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
      isValidQ10: ''
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
        this.q10 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'haizara' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'megane' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'jikan' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'genki' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'chizu' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'iriguchi' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'kaze' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'kagi' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'kazoku' ? 'is-valid' : 'is-invalid'
      this.isValidQ10 = this.q10 === 'go' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'haizara':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/01.mp3'
        break
      case 'megane':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/02.mp3'
        break
      case 'jikan':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/03.mp3'
        break
      case 'genki':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/04.mp3'
        break
      case 'chizu':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/05.mp3'
        break
      case 'iriguchi':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/06.mp3'
        break
      case 'kaze':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/07.mp3'
        break
      case 'kagi':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/08.mp3'
        break
      case 'kazoku':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/09.mp3'
        break
      case 'go':
        soundSrc = '/assets/sounds/hiraganaGa-Zo/10.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
