<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-8 col-md-8 col-lg-8 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'waishatsu'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ワイシャツ
                </p>
              </td>
              <td v-if="sound === 'menyuu'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  メニュー
                </p>
              </td>
              <td v-if="sound === 'chooku'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  チョーク
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
              <td v-if="sound === 'juusu'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  ジュース
                </p>
              </td>
              <td v-if="sound === 'jazu'">
                <b-form-select
                  :class="isValidQ5"
                  v-model="q5"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">
                  ジャズ
                </p>
              </td>
              <td v-if="sound === 'konpyuutaa'">
                <b-form-select
                  :class="isValidQ6"
                  v-model="q6"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">
                  コンピューター
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
      sounds: ['waishatsu', 'menyuu', 'chooku'],
      sounds2: ['juusu', 'jazu', 'konpyuutaa'],
      answers: [
        { value: 'konpyuuta', text: 'コンピューター' },
        { value: 'chooku', text: 'チョーク' },
        { value: 'jazu', text: 'ジャズ' },
        { value: 'menyuu', text: 'メニュー　' },
        { value: 'juusu', text: 'ジュース' },
        { value: 'waishatsu', text: 'ワイシャツ' }
      ],
      isValidQ1: '',
      isValidQ2: '',
      isValidQ3: '',
      isValidQ4: '',
      isValidQ5: '',
      isValidQ6: ''
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
        this.q6 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'waishatsu' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'menyuu' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'chooku' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'juusu' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'jazu' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'konpyuuta' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'waishatsu':
        soundSrc = '/assets/sounds/katakanaKya-Ryo/01.mp3'
        break
      case 'menyuu':
        soundSrc = '/assets/sounds/katakanaKya-Ryo/02.mp3'
        break
      case 'chooku':
        soundSrc = '/assets/sounds/katakanaKya-Ryo/03.mp3'
        break
      case 'juusu':
        soundSrc = '/assets/sounds/katakanaKya-Ryo/04.mp3'
        break
      case 'jazu':
        soundSrc = '/assets/sounds/katakanaKya-Ryo/05.mp3'
        break
      case 'konpyuutaa':
        soundSrc = '/assets/sounds/katakanaKya-Ryo/06.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
