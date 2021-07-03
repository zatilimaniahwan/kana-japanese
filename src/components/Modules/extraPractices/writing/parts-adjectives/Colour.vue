<template>
  <section class="number-area ptb_30">
      <div class="col-sm-6 col-lg-6">
        <table class="table table-bordered">
          <tr v-for="question in questions" :key="question">
            <td>{{ question }}</td>
            <td v-if="question === $t('learning.writingModule1.colour.contents.q1')">
             <b-form-select class="syllable" :class="isValidQ1" v-model="q1" :options="kanas" size="sm"></b-form-select>
              <p class="text-danger syllable" v-if="isValidQ1 === 'is-invalid'">きいろい</p>
            </td>
            <td v-if="question === $t('learning.writingModule1.colour.contents.q1')">
              kiiroi
            </td>
            <td v-if="question === $t('learning.writingModule1.colour.contents.q2')">
              <b-form-select class="syllable"  :class="isValidQ2" v-model="q2" :options="kanas" size="sm" ></b-form-select>
              <p class="text-danger syllable" v-if="isValidQ2 === 'is-invalid'">みどり</p>
            </td>
            <td v-if="question === $t('learning.writingModule1.colour.contents.q2')">
              midori
            </td>
            <td v-if="question === $t('learning.writingModule1.colour.contents.q3')" class="syllable" >
            あおい
            </td>
            <td v-if="question === $t('learning.writingModule1.colour.contents.q3')">
            <b-form-select :class="isValidQ3" v-model="q3" :options="romajis" size="sm"></b-form-select>
            <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">aoi</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q4')" class="syllable" >
            あかい
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q4')">
            <b-form-select
                    :class="isValidQ4"
                    v-model="q4"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">akai</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q5')">
                   <b-form-select
                   class="syllable"
                    :class="isValidQ5"
                    v-model="q5"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                   <p class="text-danger syllable" v-if="isValidQ5 === 'is-invalid'">くろい</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q5')">
            kuroi
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q6')">
                  <b-form-select class="syllable" :class="isValidQ6" v-model="q6" :options="kanas" size="sm"></b-form-select>
                   <p class="text-danger syllable" v-if="isValidQ6 === 'is-invalid'">むらさき</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q6')">
              murasaki
            </td>
              <td v-if="question === $t('learning.writingModule1.colour.contents.q7')" class="syllable" >
            ピンク
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q7')">
                 <b-form-select :class="isValidQ7" v-model="q7" :options="romajis" size="sm"></b-form-select>
                  <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">pinku</p>
            </td>
            <td v-if="question === $t('learning.writingModule1.colour.contents.q8')" class="syllable" >
              しろい
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q8')">
              <b-form-select
                    :class="isValidQ8"
                    v-model="q8"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">shiroi</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q9')">
              <b-form-select
              class="syllable"
                    :class="isValidQ9"
                    v-model="q9"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ9 === 'is-invalid'">はいいろ</p>
            </td>
             <td v-if="question === $t('learning.writingModule1.colour.contents.q9')">
              haiiro
             </td>
          </tr>
        </table>
         <b-button class="bg-primary mt-3" @click="checkAnswer" :disabled="emptyField">{{ $t("learning.writingModule1.colour.button") }}</b-button>
      </div>
  </section>
</template>
<script>
export default {
  name: 'Colour',
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
      questions: [
        this.$t('learning.writingModule1.colour.contents.q1'),
        this.$t('learning.writingModule1.colour.contents.q2'),
        this.$t('learning.writingModule1.colour.contents.q3'),
        this.$t('learning.writingModule1.colour.contents.q4'),
        this.$t('learning.writingModule1.colour.contents.q5'),
        this.$t('learning.writingModule1.colour.contents.q6'),
        this.$t('learning.writingModule1.colour.contents.q7'),
        this.$t('learning.writingModule1.colour.contents.q8'),
        this.$t('learning.writingModule1.colour.contents.q9')
      ],
      kanas: [
        { value: 'きいろい', text: 'きいろい' },
        { value: 'みどり', text: 'みどり' },
        { value: 'あおい', text: 'あおい' },
        { value: 'あかい', text: 'あかい' },
        { value: 'くろい', text: 'くろい' },
        { value: 'むらさき', text: 'むらさき' },
        { value: 'ピンク', text: 'ピンク' },
        { value: 'しろい', text: 'しろい' },
        { value: 'はいいろ', text: 'はいいろ' }
      ],
      romajis: [
        { value: 'kiiroi', text: 'kiiroi' },
        { value: 'midori', text: 'midori' },
        { value: 'aoi', text: 'aoi' },
        { value: 'akai', text: 'akai' },
        { value: 'kuroi', text: 'kuroi' },
        { value: 'murasaki', text: 'murasaki' },
        { value: 'pinku', text: 'pinku' },
        { value: 'shiroi', text: 'shiroi' },
        { value: 'haiiro', text: 'haiiro' }
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
      return this.q1 === null || this.q2 === null || this.q3 === null || this.q4 === null ||
      this.q5 === null || this.q6 === null || this.q7 === null || this.q8 === null || this.q9 === null
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'きいろい' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'みどり' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'aoi' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'akai' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'くろい' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'むらさき' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'pinku' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'shiroi' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'はいいろ' ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
