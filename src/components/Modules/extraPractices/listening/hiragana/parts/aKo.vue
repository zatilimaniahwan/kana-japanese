<template>
  <section class="number-area ptb_30 overflow-hidden">
    <div class="col-sm-6 col-lg-6">
      <table class="table table-bordered">
        <tr v-for="question in questions" :key="question">
          <td>
            <b-form-select
              :class="isValidQ1"
              v-model="q1"
              :options="romajis"
              size="sm"
            ></b-form-select>
          </td>
          <td>
            <b-form-select
              :class="isValidQ1"
              v-model="q1"
              :options="romajis"
              size="sm"
            ></b-form-select>
          </td>
        </tr>
      </table>
    </div>
    <b-button
      class="bg-primary mt-3"
      @click="checkAnswer"
      :disabled="emptyField"
      >{{ $t("learning.writingModule.building.button") }}</b-button
    >
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
      questions: [
        this.$t('learning.writingModule.building.contents.q1'),
        this.$t('learning.writingModule.building.contents.q2'),
        this.$t('learning.writingModule.building.contents.q3')
      ],
      kanas: [
        { value: 'としょかん', text: 'としょかん' },
        { value: 'スーパー', text: 'スーパー' },
        { value: 'えき', text: 'えき' }
      ],
      romajis: [
        { value: 'gakkou', text: 'gakkou' },
        { value: 'bijyutsukan', text: 'bijyutsukan' },
        { value: 'resutoran', text: 'resutoran' }
      ],
      isValidQ1: '',
      isValidQ2: '',
      isValidQ3: ''
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
      this.isValidQ1 = this.q1 === 'ginkou' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'えき' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'ゆうびんきょく' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'depaato' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'gakkou' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'だいがく' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'としょかん' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'bijyutsukan' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'resutoran' ? 'is-valid' : 'is-invalid'
      this.isValidQ10 = this.q10 === 'suupaa' ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
