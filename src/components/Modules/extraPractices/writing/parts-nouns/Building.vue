<template>
  <section class="number-area ptb_30 overflow-hidden">
      <div class="col-sm-6 col-lg-6">
        <table class="table table-bordered">
          <tr v-for="question in questions" :key="question">
            <td>{{ question }}</td>
            <td v-if="question === $t('learning.writingModule.building.contents.q1')" class="syllable">
              ぎんこう
            </td>
            <td v-if="question === $t('learning.writingModule.building.contents.q1')">
              <b-form-select
                    :class="isValidQ1"
                    v-model="q1"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">ginkou</p>
            </td>
            <td v-if="question === $t('learning.writingModule.building.contents.q2')">
              <b-form-select class="syllable" :class="isValidQ2" v-model="q2" :options="kanas" size="sm" ></b-form-select>
              <p class="text-danger syllable" v-if="isValidQ2 === 'is-invalid'">えき</p>
            </td>
            <td v-if="question === $t('learning.writingModule.building.contents.q2')">
              eki
            </td>
            <td v-if="question === $t('learning.writingModule.building.contents.q3')">
             <b-form-select class="syllable" :class="isValidQ3" v-model="q3" :options="kanas" size="sm"></b-form-select>
            <p class="text-danger syllable" v-if="isValidQ3 === 'is-invalid'">ゆうびんきょく</p>
            </td>
            <td v-if="question === $t('learning.writingModule.building.contents.q3')">
            yuubinkyoku
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q4')" class="syllable">
            デパート
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q4')">
            <b-form-select
                    :class="isValidQ4"
                    v-model="q4"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ4 === 'is-invalid'">depaato</p>
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q5')" class="syllable">
            がっこう
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q5')">
              <b-form-select
                    :class="isValidQ5"
                    v-model="q5"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                   <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">gakou</p>
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q6')">
                  <b-form-select class="syllable" :class="isValidQ6" v-model="q6" :options="kanas" size="sm"></b-form-select>
                   <p class="text-danger syllable" v-if="isValidQ6 === 'is-invalid'">だいがく</p>
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q6')">
              daigaku
            </td>
              <td v-if="question === $t('learning.writingModule.building.contents.q7')">
               <b-form-select class="syllable" :class="isValidQ7" v-model="q7" :options="kanas" size="sm"></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ7 === 'is-invalid'">としょかん</p>
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q7')">
              toshokan
            </td>
            <td v-if="question === $t('learning.writingModule.building.contents.q8')" class="syllable">
              びじゅつかん
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q8')">
              <b-form-select
                    :class="isValidQ8"
                    v-model="q8"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">bijyutsukan</p>
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q9')" class="syllable">
             レストラン
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q9')">
              <b-form-select
                    :class="isValidQ9"
                    v-model="q9"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ9 === 'is-invalid'">resutoran</p>
             </td>
           <td v-if="question === $t('learning.writingModule.building.contents.q10')" class="syllable">
            スーパー
            </td>
             <td v-if="question === $t('learning.writingModule.building.contents.q10')">
     <b-form-select
                    :class="isValidQ10"
                    v-model="q10"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ10 === 'is-invalid'">suupaa</p>
            </td>
          </tr>
        </table>
     </div>
         <b-button class="bg-primary mt-3" @click="checkAnswer" :disabled="emptyField">{{ $t("learning.writingModule.building.button") }}</b-button>
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
      questions: [
        this.$t('learning.writingModule.building.contents.q1'),
        this.$t('learning.writingModule.building.contents.q2'),
        this.$t('learning.writingModule.building.contents.q3'),
        this.$t('learning.writingModule.building.contents.q4'),
        this.$t('learning.writingModule.building.contents.q5'),
        this.$t('learning.writingModule.building.contents.q6'),
        this.$t('learning.writingModule.building.contents.q7'),
        this.$t('learning.writingModule.building.contents.q8'),
        this.$t('learning.writingModule.building.contents.q9'),
        this.$t('learning.writingModule.building.contents.q10')
      ],
      kanas: [
        { value: 'としょかん', text: 'としょかん' },
        { value: 'スーパー', text: 'スーパー' },
        { value: 'えき', text: 'えき' },
        { value: 'ゆうびんきょく', text: 'ゆうびんきょく' },
        { value: 'だいがく', text: 'だいがく' }
      ],
      romajis: [
        { value: 'gakkou', text: 'gakkou' },
        { value: 'bijyutsukan', text: 'bijyutsukan' },
        { value: 'resutoran', text: 'resutoran' },
        { value: 'suupaa', text: 'suupaa' },
        { value: 'ginkou', text: 'ginkou' },
        { value: 'yuubinkyoku', text: 'yuubinkyoku' },
        { value: 'depaato', text: 'depaato' }
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
      return this.q1 === null || this.q2 === null || this.q3 === null || this.q4 === null ||
      this.q5 === null || this.q6 === null || this.q7 === null || this.q8 === null || this.q9 === null || this.q10 === null
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
