<template>
  <section class="number-area ptb_30">
      <div class="col-sm-6 col-lg-6">
        <table class="table table-bordered">
          <tr v-for="question in questions" :key="question">
            <td>{{ question }}</td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q1')" class="syllable" >
            べんきょうします
            </td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q1')">
              <b-form-select :class="isValidQ1" v-model="q1" :options="romajis" size="sm"></b-form-select>
              <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">benkyoushimasu</p>
            </td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q2')" class="syllable" >
           いきます
            </td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q2')">
               <b-form-select  :class="isValidQ2" v-model="q2" :options="romajis" size="sm" ></b-form-select>
              <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">ikimasu</p>
            </td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q3')">
             <b-form-select class="syllable" :class="isValidQ3" v-model="q3" :options="kanas" size="sm"></b-form-select>
            <p class="text-danger syllable" v-if="isValidQ3 === 'is-invalid'">きます</p>
            </td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q3')">
           kimasu
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q4')">
                    <b-form-select
                    class="syllable"
                    :class="isValidQ4"
                    v-model="q4"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ4 === 'is-invalid'">かえります</p>
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q4')">
            kaerimasu
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q5')" class="syllable" >
                 さんぽします
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q5')">
                    <b-form-select
                    :class="isValidQ5"
                    v-model="q5"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                   <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">sanposhimasu</p>
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q6')" class="syllable" >
                  かいます
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q6')">
                <b-form-select :class="isValidQ6" v-model="q6" :options="romajis" size="sm"></b-form-select>
                   <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">kaimasu</p>
            </td>
              <td v-if="question === $t('learning.writingModule2.verb.contents.q7')">
                 <b-form-select class="syllable"  :class="isValidQ7" v-model="q7" :options="kanas" size="sm"></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ7 === 'is-invalid'">たべます</p>
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q7')">
              tabemasu
            </td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q8')">
               <b-form-select
                    class="syllable"
                    :class="isValidQ8"
                    v-model="q8"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ8 === 'is-invalid'">のみます</p>
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q8')">
              nomimasu
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q9')" class="syllable" >
              はたらきます
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q9')">
               <b-form-select
                    :class="isValidQ9"
                    v-model="q9"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ9 === 'is-invalid'">hatarakimasu</p>
             </td>
              <td v-if="question === $t('learning.writingModule2.verb.contents.q10')" class="syllable" >
              はたらきます
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q10')">
                 <b-form-select
                    :class="isValidQ10"
                    v-model="q10"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ10 === 'is-invalid'">ryoukoushimasu</p>
             </td>
              <td v-if="question === $t('learning.writingModule2.verb.contents.q11')">
              <b-form-select
                    class="syllable"
                    :class="isValidQ11"
                    v-model="q11"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ11 === 'is-invalid'">ききます</p>
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q11')">
              kikimasu
             </td>
              <td v-if="question === $t('learning.writingModule2.verb.contents.q12')">
              <b-form-select
                    :class="isValidQ12"
                    v-model="q12"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ12 === 'is-invalid'">みます</p>
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q12')">
              mimasu
             </td>
              <td v-if="question === $t('learning.writingModule2.verb.contents.q13')" class="syllable" >
             かきます
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q13')">
                 <b-form-select
                    :class="isValidQ13"
                    v-model="q13"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                    <strong v-if="isValidQ9 !== ''">kasamasu</strong>
                  <p class="text-danger" v-if="isValidQ9 === 'is-invalid'">kakimasu</p>
             </td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q14')" class="syllable" >
             よみます
            </td>
              <td v-if="question === $t('learning.writingModule2.verb.contents.q14')">
               <b-form-select
                    :class="isValidQ14"
                    v-model="q14"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ14 === 'is-invalid'">yomimasu</p>
             </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q15')">
              <b-form-select
                    class="syllable"
                    :class="isValidQ15"
                    v-model="q15"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ15 === 'is-invalid'">あそびます</p>
             </td>
              <td v-if="question === $t('learning.writingModule2.verb.contents.q15')">
             asobimasu
            </td>
             <td v-if="question === $t('learning.writingModule2.verb.contents.q16')" class="syllable" >
              すんでいます
             </td>
            <td v-if="question === $t('learning.writingModule2.verb.contents.q16')">
              <b-form-select
                    :class="isValidQ16"
                    v-model="q16"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ16 === 'is-invalid'">sundeimasu</p>
            </td>
          </tr>
        </table>
         <b-button class="bg-primary mt-3" @click="checkAnswer" :disabled="emptyField">{{ $t("learning.writingModule2.verb.button") }}</b-button>
      </div>
  </section>
</template>
<script>
export default {
  name: 'verb',
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
      q11: null,
      q12: null,
      q13: null,
      q14: null,
      q15: null,
      q16: null,
      questions: [
        this.$t('learning.writingModule2.verb.contents.q1'),
        this.$t('learning.writingModule2.verb.contents.q2'),
        this.$t('learning.writingModule2.verb.contents.q3'),
        this.$t('learning.writingModule2.verb.contents.q4'),
        this.$t('learning.writingModule2.verb.contents.q5'),
        this.$t('learning.writingModule2.verb.contents.q6'),
        this.$t('learning.writingModule2.verb.contents.q7'),
        this.$t('learning.writingModule2.verb.contents.q8'),
        this.$t('learning.writingModule2.verb.contents.q9'),
        this.$t('learning.writingModule2.verb.contents.q10'),
        this.$t('learning.writingModule2.verb.contents.q11'),
        this.$t('learning.writingModule2.verb.contents.q12'),
        this.$t('learning.writingModule2.verb.contents.q13'),
        this.$t('learning.writingModule2.verb.contents.q14'),
        this.$t('learning.writingModule2.verb.contents.q15'),
        this.$t('learning.writingModule2.verb.contents.q16')
      ],
      kanas: [
        { value: 'たべます', text: 'たべます' },
        { value: 'のみます', text: 'のみます' },
        { value: 'ききます', text: 'ききます' },
        { value: 'みます', text: 'みます' },
        { value: 'きます', text: 'きます' },
        { value: 'かえります', text: 'かえります' },
        { value: 'よみます', text: 'よみます' },
        { value: 'あそびます', text: 'あそびます' }
      ],
      romajis: [
        { value: 'ikimasu', text: 'ikimasu' },
        { value: 'sanposhimasu', text: 'sanposhimasu' },
        { value: 'kaimasu', text: 'kaimasu' },
        { value: 'hatarakimasu', text: 'hatarakimasu' },
        { value: 'ryokoushimasu', text: 'ryokoushimasu' },
        { value: 'benkyoushimasu', text: 'benkyoushimasu' },
        { value: 'kakimasu', text: 'kakimasu' },
        { value: 'yomimasu', text: 'yomimasu' },
        { value: 'sundeimasu', text: 'sundeimasu' }
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
      isValidQ10: '',
      isValidQ11: '',
      isValidQ12: '',
      isValidQ13: '',
      isValidQ14: '',
      isValidQ15: '',
      isValidQ16: ''
    }
  },
  computed: {
    emptyField () {
      return this.q1 === null || this.q2 === null || this.q3 === null || this.q4 === null ||
      this.q5 === null || this.q6 === null || this.q7 === null || this.q8 === null || this.q9 === null ||
      this.q10 === null || this.q11 == null || this.q12 === null || this.q13 === null || this.q14 === null ||
      this.q15 === null || this.q16 === null
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'benkyoushimasu' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'ikimasu' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'きます' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'かえります' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'sanposhimasu' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'kaimasu' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'たべます' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'のみます' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'hatarakimasu' ? 'is-valid' : 'is-invalid'
      this.isValidQ10 = this.q10 === 'ryokoushimasu' ? 'is-valid' : 'is-invalid'
      this.isValidQ11 = this.q11 === 'ききます' ? 'is-valid' : 'is-invalid'
      this.isValidQ12 = this.q12 === 'みます' ? 'is-valid' : 'is-invalid'
      this.isValidQ13 = this.q13 === 'kakimasu' ? 'is-valid' : 'is-invalid'
      this.isValidQ14 = this.q14 === 'yomimasu' ? 'is-valid' : 'is-invalid'
      this.isValidQ15 = this.q15 === 'あそびます' ? 'is-valid' : 'is-invalid'
      this.isValidQ16 = this.q16 === 'sundeimasu' ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
