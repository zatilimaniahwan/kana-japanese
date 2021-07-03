<template>
  <section class="number-area ptb_30">
      <b-row class="mt-4 col-sm-12 ol-lg-12">
        <b-col>
          <table>
            <th></th>
            <tr>
              <td>
                <p style="margin-top: -30px">
                     <b-card>
                    <b-card-text>
                    <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q6')}}</strong></p>
                    <p class="text-center syllable"> かみのけ</p>
                  <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">kamimoke</p>
                    </b-card-text>
                  </b-card>
                  <b-form-select
                    :class="isValidQ6"
                    v-model="q6"
                    :options="romajis"
                    size="md"
                  ></b-form-select>
                </p>
                <p style="margin-top: 30px">
                      <b-card>
                    <b-card-text>
                    <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q4')}}</strong></p>
                    <p class="text-center">mimi</p>
                  <p class="text-danger text-center syllable" v-if="isValidQ4 === 'is-invalid'">みみ</p>
                    </b-card-text>
                  </b-card>
                  <b-form-select
                  class="syllable"
                    :class="isValidQ4"
                    v-model="q4"
                    :options="kanas"
                    size="md"
                  ></b-form-select>
                </p>
              </td>
              <td>
                <img
                  class="img-fluid rounded mx-auto d-block mt-4 ml-2"
                  alt="Responsive image"
                  src="/assets/img/dragndrop/head.png"
                  width="70%"
                />
                <tr>
                  <td>
                    <p style="margin-left:200px; margin-top: -150px">
                    <b-card>
                    <b-card-text>
                        <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q2')}}</strong></p>
                         <p class="text-center syllable">はな</p>
                  <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">hana</p>
                    </b-card-text>
                    </b-card>
                      <b-form-select
                        :class="isValidQ2"
                        v-model="q2"
                        :options="romajis"
                        size="md"
                      ></b-form-select>
                    </p>
                  </td>
                  <td>
                    <p style="margin-left: 550px; margin-top: -130px">
                    <b-card>
                    <b-card-text>
                    <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q5')}}</strong></p>
                    <p class="text-center syllable"> くち</p>
                  <p class="text-danger text-center" v-if="isValidQ5 === 'is-invalid'">kishi</p>
                    </b-card-text>
                  </b-card>
                      <b-form-select
                        :class="isValidQ5"
                        v-model="q5"
                        :options="romajis"
                        size="md"
                      ></b-form-select>
                    </p>
                  </td>
                </tr>
              </td>
              <td>
                <p style="margin-left: -80px; margin-top: 5px">
                  <b-card>
                    <b-card-text>
                    <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q1')}}</strong></p>
                    <p class="text-center syllable"> め</p>
                  <p class="text-danger text-center" v-if="isValidQ1 === 'is-invalid'">me</p>
                    </b-card-text>
                  </b-card>
                  <b-form-select
                    :class="isValidQ1"
                    v-model="q1"
                    :options="romajis"
                    size="md"
                  ></b-form-select>
                </p>
              </td>
            </tr>
          </table>
        </b-col>
      </b-row>
      <b-row class="mt-4 col-sm-12 ol-lg-12">
        <b-col>
               <table>
               <th></th>
            <tr>
              <td>
                <p style="margin-top: -90px">
                     <b-card>
                    <b-card-text>
                    <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q7')}}</strong></p>
                    <p class="text-center">te</p>
                  <p class="text-danger text-center syllable" v-if="isValidQ7 === 'is-invalid'">て</p>
                    </b-card-text>
                  </b-card>
                  <b-form-select
                  class="syllable"
                    :class="isValidQ7"
                    v-model="q7"
                    :options="kanas"
                    size="md"
                  ></b-form-select>
                </p>
              </td>
              <td>
                <img
                  class="img-fluid rounded mx-auto d-block mt-4 ml-2"
                  alt="Responsive image"
                  src="/assets/img/dragndrop/body.png"
                  width="70%"
                />
                <tr>
                  <td>
                    <p style=" margin-top: -220px">
                    <b-card>
                    <b-card-text>
                        <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q3')}}</strong></p>
                         <p class="text-center">ashi</p>
                  <p class="text-danger syllable" v-if="isValidQ3 === 'is-invalid'">あし</p>
                    </b-card-text>
                    </b-card>
                      <b-form-select
                      class="syllable"
                        :class="isValidQ3"
                        v-model="q3"
                        :options="kanas"
                        size="md"
                      ></b-form-select>
                    </p>
                  </td>
                </tr>
              </td>
              <td>
                <p style="margin-left: 10px; margin-top: -130px">
                  <b-card>
                    <b-card-text>
                    <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q9')}}</strong></p>
                    <p class="text-center"> atama</p>
                  <p class="text-danger text-center syllable" v-if="isValidQ9 === 'is-invalid'">あたま</p>
                    </b-card-text>
                  </b-card>
                  <b-form-select
                    :class="isValidQ9"
                    v-model="q9"
                    :options="kanas"
                    size="md"
                  ></b-form-select>
                </p>
                <p style="margin-top:30px;">
                    <b-card>
                    <b-card-text>
                    <p class="text-center"><strong>{{$t('learning.writingModule.body.contents.q8')}}</strong></p>
                    <p class="text-center"> kao</p>
                        <strong class="text-center syllable" v-if="isValidQ8 !== ''">かを</strong>
                  <p class="text-danger text-center syllable" v-if="isValidQ8 === 'is-invalid'">かお</p>
                    </b-card-text>
                  </b-card>
                  <b-form-select
                  class="syllable"
                    :class="isValidQ8"
                    v-model="q8"
                    :options="kanas"
                    size="md"
                  ></b-form-select>
                  </p>
              </td>
            </tr>
          </table>
        </b-col>
      </b-row>
      <b-row class="mt-3 ml-3">
        <b-button class="bg-primary" @click="checkAnswer" :disabled="emptyField">{{ $t("learning.writingModule.body.button") }}</b-button>
      </b-row>
  </section>
</template>
<script>
export default {
  name: 'BodyParts',
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
      kanas: [
        { value: 'みみ', text: 'みみ' },
        { value: 'くち', text: 'くち' },
        { value: 'かみのけ', text: 'かみのけ' },
        { value: 'て', text: 'て' },
        { value: 'かお', text: 'かお' },
        { value: 'め', text: 'め' },
        { value: 'はな', text: 'はな' },
        { value: 'あし', text: 'あし' },
        { value: 'あたま', text: 'あたま' }
      ],
      romajis: [
        { value: 'ashi', text: 'ashi' },
        { value: 'mimi', text: 'mimi' },
        { value: 'kuchi', text: 'kuchi' },
        { value: 'kaminoke', text: 'kaminoke' },
        { value: 'me', text: 'me' },
        { value: 'hana', text: 'hana' },
        { value: 'te', text: 'te' },
        { value: 'kao', text: 'kao' },
        { value: 'atama', text: 'atama' }
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
      this.q5 === null || this.q6 === null || this.q7 === null || this.q8 === null ||
      this.q9 === null
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'me' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'hana' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'あし' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'みみ' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'kuchi' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'kaminoke' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'て' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'かお' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'あたま' ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
