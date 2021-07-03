<template>
  <section class="number-area ptb_30">
    <div class="col-sm-6 col-lg-6">
        <table class="table table-bordered">
          <tr v-for="question in questions" :key="question">
            <td>{{ question }}</td>
            <td v-if="question === $t('learning.writingModule1.feeling.contents.q1')" class="syllable" >
             たのしい
            </td>
            <td v-if="question === $t('learning.writingModule1.feeling.contents.q1')">
                 <b-form-select  :class="isValidQ1" v-model="q1" :options="romajis" size="sm"></b-form-select>
              <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">tanoshii</p>
            </td>
            <td v-if="question === $t('learning.writingModule1.feeling.contents.q2')" class="syllable" >
              すき
            </td>
            <td v-if="question === $t('learning.writingModule1.feeling.contents.q2')">
              <b-form-select :class="isValidQ1" v-model="q1" :options="romajis" size="sm"></b-form-select>
              <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">suki</p>
            </td>
            <td v-if="question === $t('learning.writingModule1.feeling.contents.q3')">
              <b-form-select class="syllable"  :class="isValidQ3" v-model="q3" :options="kanas" size="sm"></b-form-select>
            <p class="text-danger syllable" v-if="isValidQ3 === 'is-invalid'">きらい</p>
            </td>
            <td v-if="question === $t('learning.writingModule1.feeling.contents.q3')">
            kirai
            </td>
             <td v-if="question === $t('learning.writingModule1.feeling.contents.q4')">
            <b-form-select
                    class="syllable"
                    :class="isValidQ4"
                    v-model="q4"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">おいしい</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.feeling.contents.q4')">
            oishii
            </td>
             <td v-if="question === $t('learning.writingModule1.feeling.contents.q5')">
                   <b-form-select
                    :class="isValidQ5"
                    v-model="q5"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                   <p class="text-danger syllable" v-if="isValidQ5 === 'is-invalid'">くろい</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.feeling.contents.q5')">
            kuroi
            </td>
             <td v-if="question === $t('learning.writingModule1.feeling.contents.q6')" class="syllable" >
                いい
            </td>
             <td v-if="question === $t('learning.writingModule1.feeling.contents.q6')">
                <b-form-select :class="isValidQ6" v-model="q6" :options="romajis" size="sm"></b-form-select>
                <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">ii</p>
            </td>
              <td v-if="question === $t('learning.writingModule1.feeling.contents.q7')">
                 <b-form-select class="syllable"  :class="isValidQ7" v-model="q7" :options="kanas" size="sm"></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ7 === 'is-invalid'">しんぱい</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.feeling.contents.q7')">
             shinpai
            </td>
            <td v-if="question === $t('learning.writingModule1.feeling.contents.q8')">
              <b-form-select
                    class="syllable"
                    :class="isValidQ8"
                    v-model="q8"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ8 === 'is-invalid'">むずかしい</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.feeling.contents.q8')">
             muzukashii
            </td>
          </tr>
        </table>
      <b-button class="bg-primary mt-3" @click="checkAnswer" :disabled="emptyField">{{
        $t("learning.writingModule1.feeling.button")
      }}</b-button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'feeling',
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
      questions: [
        this.$t('learning.writingModule1.feeling.contents.q1'),
        this.$t('learning.writingModule1.feeling.contents.q2'),
        this.$t('learning.writingModule1.feeling.contents.q3'),
        this.$t('learning.writingModule1.feeling.contents.q4'),
        this.$t('learning.writingModule1.feeling.contents.q5'),
        this.$t('learning.writingModule1.feeling.contents.q6'),
        this.$t('learning.writingModule1.feeling.contents.q7'),
        this.$t('learning.writingModule1.feeling.contents.q8')
      ],
      kanas: [
        { value: 'きらい', text: 'きらい' },
        { value: 'おいしい', text: 'おいしい' },
        { value: 'しんぱい', text: 'しんぱい' },
        { value: 'むずかしい', text: 'むずかしい' }
      ],
      romajis: [
        { value: 'tanoshii', text: 'tanoshii' },
        { value: 'suki', text: 'suki' },
        { value: 'omoshiroi', text: 'omoshiroi' },
        { value: 'ii', text: 'ii' }
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
      return this.q1 === null || this.q2 === null || this.q3 === null || this.q4 === null ||
      this.q5 === null || this.q6 === null || this.q7 === null || this.q8 === null
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'tanoshii' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'suki' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'きらい' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'おいしい' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'omoshiroi' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'ii' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'しんぱい' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'むずかしい' ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
