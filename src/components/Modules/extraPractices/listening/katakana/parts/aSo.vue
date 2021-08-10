<template>
  <section class="number-area ptb_30 overflow-hidden">
    <b-container class="col-sm-4 col-md-4 col-lg-4 ml-0">
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <tr v-for="sound in sounds" :key="sound">
              <td v-if="sound === 'keeki'">
                <b-form-select
                  :class="isValidQ1"
                  v-model="q1"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">
                  ケーキ
                </p>
              </td>
              <td v-if="sound === 'soosu'">
                <b-form-select
                  :class="isValidQ2"
                  v-model="q2"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">
                  ソース
                </p>
              </td>
              <td v-if="sound === 'meganekeesu'">
                <b-form-select
                  :class="isValidQ3"
                  v-model="q3"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">
                  めがねケース
                </p>
              </td>
              <td v-if="sound === 'kiui'">
                <b-form-select
                  :class="isValidQ4"
                  v-model="q4"
                  :options="answers"
                  size="sm"
                ></b-form-select>
                <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">
                  キウイ
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
      sounds: ['keeki', 'soosu', 'meganekeesu', 'kiui'],
      answers: [
        { value: 'kiui', text: 'キウイ' },
        { value: 'keeki', text: 'ケーキ' },
        { value: 'meganekeesu', text: 'めがねケース' },
        { value: 'soosu', text: 'ソース' }
      ],
      isValidQ1: '',
      isValidQ2: '',
      isValidQ3: '',
      isValidQ4: ''
    }
  },
  computed: {
    emptyField () {
      return (
        this.q1 === null ||
        this.q2 === null ||
        this.q3 === null ||
        this.q4 === null
      )
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'keeki' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'soosu' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'meganekeesu' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'kiui' ? 'is-valid' : 'is-invalid'
    },
    play (val) {
      let soundSrc
      switch (val) {
      case 'keeki':
        soundSrc = '/assets/sounds/katakanaA-So/01.mp3'
        break
      case 'soosu':
        soundSrc = '/assets/sounds/katakanaA-So/02.mp3'
        break
      case 'meganekeesu':
        soundSrc = '/assets/sounds/katakanaA-So/03.mp3'
        break
      case 'kiui':
        soundSrc = '/assets/sounds/katakanaA-So/04.mp3'
        break
      }
      const audio = new Audio(soundSrc)
      audio.play()
    }
  }
}
</script>
