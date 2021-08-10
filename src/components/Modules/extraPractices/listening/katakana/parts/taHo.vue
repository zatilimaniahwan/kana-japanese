<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'anaunsaa'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  アナウンサー
                </p>
              </td>
              <td v-if="sound === 'sukaafu'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  スカーフ
                </p>
              </td>
              <td v-if="sound === 'tekisuto'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  テキスト
                </p>
              </td>
              <td v-if="sound === 'nooto'">
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
              <td v-if="sound === 'koohii'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  コーヒー
                </p>
              </td>
              <td v-if="sound === 'takushii'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">
                  タクシー
                </p>
              </td>
              <td v-if="sound === 'suutsu'">
                <b-form-select
                  :class="isValidQ7"
                  v-model="q7"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">
                  スーツ
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
      sounds: ['anaunsaa', 'sukaafu', 'tekisuto', 'nooto'],
      sounds2: ['koohii', 'takushii', 'suutsu'],
      answers: [
        { value: 'suutsu', text: 'スーツ' },
        { value: 'nooto', text: 'ノート' },
        { value: 'tekisuto', text: 'テキスト' },
        { value: 'takushii', text: 'タクシー' },
        { value: 'sukaafu', text: 'スカーフ' },
        { value: 'koohii', text: 'コーヒー' },
        { value: 'anaunsaa', text: 'アナウンサー' }
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
      this.isValidQ1 = this.q1 === 'anaunsaa' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'sukaafu' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'tekisuto' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'nooto' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'koohii' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'takushii' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'suutsu' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'anaunsaa':
        soundSrc = '/assets/sounds/katakanaTa-Ho/01.mp3'
        break
      case 'sukaafu':
        soundSrc = '/assets/sounds/katakanaTa-Ho/02.mp3'
        break
      case 'tekisuto':
        soundSrc = '/assets/sounds/katakanaTa-Ho/03.mp3'
        break
      case 'nooto':
        soundSrc = '/assets/sounds/katakanaTa-Ho/04.mp3'
        break
      case 'koohii':
        soundSrc = '/assets/sounds/katakanaTa-Ho/05.mp3'
        break
      case 'takushii':
        soundSrc = '/assets/sounds/katakanaTa-Ho/06.mp3'
        break
      case 'suutsu':
        soundSrc = '/assets/sounds/katakanaTa-Ho/07.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
