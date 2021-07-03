<template>
  <section class="number-area ptb_30">
    <div class="col-sm-6 col-lg-6">
        <table class="table table-bordered">
          <tr v-for="question in questions" :key="question">
            <td>{{ question }}</td>
            <td v-if="question === $t('learning.writingModule.fruit.contents.q1')" class="syllable">
             みかん
            </td>
            <td v-if="question === $t('learning.writingModule.fruit.contents.q1')">
              <b-form-select
                    :class="isValidQ1"
                    v-model="q1"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">mikan</p>
            </td>

            <td v-if="question === $t('learning.writingModule.fruit.contents.q2')" class="syllable">
            すいか
            </td>
            <td v-if="question === $t('learning.writingModule.fruit.contents.q2')">
             <b-form-select
                    :class="isValidQ2"
                    v-model="q2"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">suika</p>
            </td>
            <td v-if="question === $t('learning.writingModule.fruit.contents.q3')">
             <b-form-select class="syllable" :class="isValidQ3" v-model="q3" :options="kanas" size="sm"></b-form-select>
            <p class="text-danger syllable" v-if="isValidQ3 === 'is-invalid'">オレンジ</p>
            </td>
            <td v-if="question === $t('learning.writingModule.fruit.contents.q3')">
            orenji
            </td>
             <td v-if="question === $t('learning.writingModule.fruit.contents.q4')">
                <b-form-select
                class="syllable"
                    :class="isValidQ4"
                    v-model="q4"
                    :options="kanas"
                    size="sm"
                  ></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ4 === 'is-invalid'">もも</p>
            </td>
             <td v-if="question === $t('learning.writingModule.fruit.contents.q4')">
            momo
            </td>
             <td v-if="question === $t('learning.writingModule.fruit.contents.q5')" class="syllable">
            いちご
            </td>
             <td v-if="question === $t('learning.writingModule.fruit.contents.q5')">
              <b-form-select
                    :class="isValidQ5"
                    v-model="q5"
                    :options="romajis"
                    size="sm"
                  ></b-form-select>
                  <strong v-if="isValidQ5 !== ''">ishigo</strong>
                   <p class="text-danger" v-if="isValidQ5 === 'is-invalid'">ichigo</p>
            </td>
             <td v-if="question === $t('learning.writingModule.fruit.contents.q6')" class="syllable">
             バナナ
            </td>
             <td v-if="question === $t('learning.writingModule.fruit.contents.q6')">
              <b-form-select :class="isValidQ6" v-model="q6" :options="romajis" size="sm"></b-form-select>
                   <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">banana</p>
            </td>
              <td v-if="question === $t('learning.writingModule.fruit.contents.q7')">
               <b-form-select class="syllable" :class="isValidQ7" v-model="q7" :options="kanas" size="sm"></b-form-select>
                  <p class="text-danger syllable" v-if="isValidQ7 === 'is-invalid'">ぶどう</p>
            </td>
             <td v-if="question === $t('learning.writingModule.fruit.contents.q7')">
              budou
            </td>
          </tr>
        </table>
      <b-button class="bg-primary mt-3" @click="checkAnswer" :disabled="emptyField">{{
        $t("learning.writingModule.fruit.button")
      }}</b-button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Fruit',
  data () {
    return {
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      q5: null,
      q6: null,
      q7: null,
      questions: [
        this.$t('learning.writingModule.fruit.contents.q1'),
        this.$t('learning.writingModule.fruit.contents.q2'),
        this.$t('learning.writingModule.fruit.contents.q3'),
        this.$t('learning.writingModule.fruit.contents.q4'),
        this.$t('learning.writingModule.fruit.contents.q5'),
        this.$t('learning.writingModule.fruit.contents.q6'),
        this.$t('learning.writingModule.fruit.contents.q7')
      ],
      kanas: [
        { value: 'いちご', text: 'いちご' },
        { value: 'かばん', text: 'かばん' },
        { value: 'バナナ', text: 'バナナ' },
        { value: 'ぶどう', text: 'ぶどう' },
        { value: 'みかん', text: 'みかん' },
        { value: 'すいか', text: 'すいか' },
        { value: 'オレンジ', text: 'オレンジ' },
        { value: 'もも', text: 'もも' }
      ],
      romajis: [
        { value: 'orenji', text: 'orenji' },
        { value: 'momo', text: 'momo' },
        { value: 'ichigo', text: 'ichigo' },
        { value: 'banana', text: 'banana' },
        { value: 'mikan', text: 'mikan' },
        { value: 'suika', text: 'suika' },
        { value: 'budou', text: 'budou' }
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
      return this.q1 === null || this.q2 === null || this.q3 === null || this.q4 === null ||
      this.q5 === null || this.q6 === null || this.q7 === null
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'mikan' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'suika' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'オレンジ' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'もも' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'ichigo' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'banana' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'ぶどう' ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
