<template>
  <section class="number-area ptb_30 overflow-hidden">
    <div class="col-sm-6 col-lg-6">
        <table class="table table-bordered">
          <tr v-for="question in questions" :key="question">
            <td>{{ question }}</td>
            <td v-if="question === $t('learning.writingModule.object.contents.q1')">
              <b-form-select
              :class="isValidQ1"
              class="syllable"
                v-model="q1"
                :options="kanas"
                size="sm"
              ></b-form-select>
              <p class="text-danger syllable" v-if="isValidQ1 === 'is-invalid'">えんぴつ</p>
            </td>
            <td v-if="question === $t('learning.writingModule.object.contents.q1')">
              enpitsu
            </td>
            <td v-if="question === $t('learning.writingModule.object.contents.q2')">
              <b-form-select class="syllable" :class="isValidQ2" v-model="q2" :options="kanas" size="sm" ></b-form-select>
              <p class="text-danger syllable" v-if="isValidQ2 === 'is-invalid'">ぼうし</p>
            </td>
            <td v-if="question === $t('learning.writingModule.object.contents.q2')">
             boushi
            </td>
            <td v-if="question === $t('learning.writingModule.object.contents.q3')" class="syllable">
            けいたいでんわ
            </td>
            <td v-if="question === $t('learning.writingModule.object.contents.q3')">
            <b-form-select :class="isValidQ3" v-model="q3" :options="romajis" size="sm"></b-form-select>
            <p class="text-danger" v-if="isValidQ3 === 'is-invalid'">keitaidenwa</p>
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q4')" class="syllable">
            たばこ
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q4')">
            <b-form-select
            class="syllable"
                    :class="isValidQ4"
                    v-model="q4"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ4 === 'is-invalid'">tabako</p>
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q5')">
              <b-form-select
              class="syllable"
                    :class="isValidQ5"
                    v-model="q5"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                   <p class="text-danger syllable" v-if="isValidQ5 === 'is-invalid'">ノート</p>
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q5')">
              nooto
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q6')">
                  <b-form-select class="syllable" :class="isValidQ6" v-model="q6" :options="kanas" size="sm"></b-form-select>
                   <p class="text-danger syllable" v-if="isValidQ6 === 'is-invalid'">かばん</p>
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q6')">
              kaban
            </td>
              <td v-if="question === $t('learning.writingModule.object.contents.q7')" class="syllable">
              シャツ
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q7')">
                 <b-form-select :class="isValidQ7" v-model="q7" :options="romajis" size="sm"></b-form-select>
                  <p class="text-danger" v-if="isValidQ7 === 'is-invalid'">shatsu</p>
            </td>
            <td v-if="question === $t('learning.writingModule.object.contents.q8')" class="syllable">
            きょうかしょ
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q8')">
              <b-form-select
                    :class="isValidQ8"
                    v-model="q8"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">kyoukasho</p>
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q9')">
                  <b-form-select
                  class="syllable"
                    :class="isValidQ9"
                    v-model="q9"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ9 === 'is-invalid'">パソコン</p>
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q9')">
            pasokon
             </td>
           <td v-if="question === $t('learning.writingModule.object.contents.q10')">
                    <b-form-select
                    class="syllable"
                    :class="isValidQ10"
                    v-model="q10"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ10 === 'is-invalid'">くつした</p>
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q10')">
            kutsushita
            </td>
            <td v-if="question === $t('learning.writingModule.object.contents.q11')" class="syllable">
              めがね
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q11')">
               <b-form-select
                    :class="isValidQ11"
                    v-model="q11"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ11 === 'is-invalid'">megane</p>
            </td>
            <td v-if="question === $t('learning.writingModule.object.contents.q12')" class="syllable">
              ほんだな
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q12')">
               <b-form-select
                    :class="isValidQ12"
                    v-model="q12"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ12 === 'is-invalid'">hondana</p>
            </td>
                <td v-if="question === $t('learning.writingModule.object.contents.q13')">
                   <b-form-select
                   class="syllable"
                    :class="isValidQ13"
                    v-model="q13"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ13 === 'is-invalid'">ピアノ</p>
            </td>
             <td v-if="question === $t('learning.writingModule.object.contents.q13')">
              piano
            </td>
          </tr>
        </table>
      <b-button class="bg-primary mt-3" @click="checkAnswer" :disabled="emptyField">{{
        $t("learning.writingModule.object.button")
      }}</b-button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'object',
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
      questions: [
        this.$t('learning.writingModule.object.contents.q1'),
        this.$t('learning.writingModule.object.contents.q2'),
        this.$t('learning.writingModule.object.contents.q3'),
        this.$t('learning.writingModule.object.contents.q4'),
        this.$t('learning.writingModule.object.contents.q5'),
        this.$t('learning.writingModule.object.contents.q6'),
        this.$t('learning.writingModule.object.contents.q7'),
        this.$t('learning.writingModule.object.contents.q8'),
        this.$t('learning.writingModule.object.contents.q9'),
        this.$t('learning.writingModule.object.contents.q10'),
        this.$t('learning.writingModule.object.contents.q11'),
        this.$t('learning.writingModule.object.contents.q12'),
        this.$t('learning.writingModule.object.contents.q13')
      ],
      kanas: [
        { value: 'パソコン', text: 'パソコン' },
        { value: 'くつした', text: 'くつした' },
        { value: 'ピアノ', text: 'ピアノ' },
        { value: 'えんぴつ', text: 'えんぴつ' },
        { value: 'ぼうし', text: 'ぼうし' },
        { value: 'ノート', text: 'ノート' },
        { value: 'かばん', text: 'かばん' }
      ],
      romajis: [
        { value: 'kyoukasho', text: 'kyoukasho' },
        { value: 'megane', text: 'megane' },
        { value: 'hondana', text: 'hondana' },
        { value: 'keitaidenwa', text: 'keitaidenwa' },
        { value: 'tabako', text: 'tabako' },
        { value: 'shatsu', text: 'shatsu' }
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
      isValidQ13: ''
    }
  },
  computed: {
    emptyField () {
      return this.q1 === null || this.q2 === null || this.q3 === null || this.q4 === null ||
      this.q5 === null || this.q6 === null || this.q7 === null || this.q8 === null ||
      this.q9 === null || this.q10 === null || this.q11 === null || this.q12 === null || this.q13 === null
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'えんぴつ' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'ぼうし' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'keitaidenwa' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'tabako' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'ノート' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'かばん' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'shatsu' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'kyoukasho' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'パソコン' ? 'is-valid' : 'is-invalid'
      this.isValidQ10 = this.q10 === 'くつした' ? 'is-valid' : 'is-invalid'
      this.isValidQ11 = this.q11 === 'megane' ? 'is-valid' : 'is-invalid'
      this.isValidQ12 = this.q12 === 'hondana' ? 'is-valid' : 'is-invalid'
      this.isValidQ13 = this.q13 === 'ピアノ' ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
