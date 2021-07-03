<template>
  <section class="number-area ptb_30">
      <b-row class="mt-4 col-sm-12 ol-lg-12">
        <b-col>
          <table>
            <th></th>
            <tr>
              <td></td>
              <td style="width: 40%">
                <div class="container" style="width: 20%">
                  <p style="margin-top: -10px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q3")
                          }}</strong>
                        </p>
                        <p class="text-center">ue</p>
                    <p class="text-danger syllable" v-if="isValidQ3 === 'is-invalid'">うえ</p>
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
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td style="width: 20%">
                <div class="container" style="width: 50%">
                  <p style="margin-top: 200px; margin-right: 10px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q1")
                          }}</strong>
                        </p>
                        <p class="text-center syllable">ひだり</p>
                    <p class="text-danger" v-if="isValidQ1 === 'is-invalid'">hidari</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                      :class="isValidQ1"
                      v-model="q1"
                      :options="romajis"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
              <td>
                <img
                  class="img-fluid rounded mx-auto d-block mt-4 ml-2"
                  alt="Responsive image"
                  src="/assets/img/dragndrop/graphics_Arrowkeys-colour.png"
                  width="70%"
                />
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </td>
              <td td style="width: 20%">
                <div class="container" style="width: 50%">
                  <p style="margin-top: 200px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q2")
                          }}</strong>
                        </p>
                        <p class="text-center syllable">みぎ</p>
                    <p class="text-danger" v-if="isValidQ2 === 'is-invalid'">migi</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                      :class="isValidQ2"
                      v-model="q2"
                      :options="romajis"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td style="width: 20%">
                <div class="container" style="width: 20%">
                  <p style="margin-top: 30px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q4")
                          }}</strong>
                        </p>
                        <p class="text-center">shita</p>
                    <p class="text-danger syllable" v-if="isValidQ4 === 'is-invalid'">した</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                    class="syllable"
                      :class="isValidQ3"
                      v-model="q4"
                      :options="kanas"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
              <td></td>
            </tr>
          </table>
        </b-col>
      </b-row>
      <b-row class="mt-5 col-sm-12 ol-lg-12">
        <b-col>
          <table>
            <th></th>
            <tr>
              <td></td>
              <td style="width: 40%">
                <div class="container" style="width: 20%">
                  <p style="margin-top: -10px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q11")
                          }}</strong>
                        </p>
                        <p class="text-center">kita</p>
                    <p class="text-danger syllable" v-if="isValidQ11 === 'is-invalid'">きた</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                    class="syllable"
                      :class="isValidQ11"
                      v-model="q11"
                      :options="kanas"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td style="width: 20%">
                <div class="container" style="width: 50%">
                  <p style="margin-top: 50px; margin-right: 10px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q10")
                          }}</strong>
                        </p>
                        <p class="text-center syllable">にし</p>
                    <p class="text-danger" v-if="isValidQ10 === 'is-invalid'">nishi</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                      :class="isValidQ10"
                      v-model="q10"
                      :options="kanas"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
              <td>
                <img
                  class="img-fluid rounded mx-auto d-block mt-4 ml-2"
                  alt="Responsive image"
                  src="/assets/img/dragndrop/graphics_compass-colour.png"
                  width="70%"
                />
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </td>
              <td td style="width: 20%">
                <div class="container" style="width: 50%">
                  <p style="margin-top: 50px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q9")
                          }}</strong>
                        </p>
                        <p class="text-center syllable">ひがし</p>
                    <p class="text-danger" v-if="isValidQ9 === 'is-invalid'">higashi</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                      :class="isValidQ9"
                      v-model="q9"
                      :options="romajis"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td style="width: 20%">
                <div class="container" style="width: 20%">
                  <p style="margin-top: 30px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q12")
                          }}</strong>
                        </p>
                        <p class="text-center">minami</p>
                    <p class="text-danger syllable" v-if="isValidQ12 === 'is-invalid'">めなめ</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                    class="syllable"
                      :class="isValidQ12"
                      v-model="q12"
                      :options="kanas"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
              <td></td>
            </tr>
          </table>
        </b-col>
      </b-row>
      <b-row class="mt-5 col-sm-12 ol-lg-12">
        <b-col>
          <table>
            <th></th>
            <tr>
              <td></td>
              <td style="width: 40%">
                <div class="container" style="width: 20%">
                  <p style="margin-top: -10px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q7")
                          }}</strong>
                        </p>
                        <p class="text-center">naka</p>
                    <p class="text-danger syllable" v-if="isValidQ7 === 'is-invalid'">なか</p>
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
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td style="width: 20%">
                <div class="container" style="width: 50%">
                  <p style="margin-top: 50px; margin-right: 10px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q6")
                          }}</strong>
                        </p>
                        <p class="text-center syllable">うしろ</p>
                    <p class="text-danger" v-if="isValidQ6 === 'is-invalid'">ushiro</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                      :class="isValidQ6"
                      v-model="q6"
                      :options="romajis"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
              <td>
                <img
                  class="img-fluid rounded mx-auto d-block mt-4 ml-2"
                  alt="Responsive image"
                  src="/assets/img/dragndrop/graphics_inside-nextto-infrontl.png"
                  width="100%"
                />
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </td>
              <td td style="width: 20%">
                <div class="container" style="width: 50%">
                  <p style="margin-top: 50px">
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q8")
                          }}</strong>
                        </p>
                        <p class="text-center">tonari</p>
                    <p class="text-danger syllable" v-if="isValidQ8 === 'is-invalid'">となり</p>
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
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td style="width: 20%">
                <div class="container" style="width: 30%;margin-left:200px;margin-top: 20px">
                  <p>
                    <b-card>
                      <b-card-text>
                        <p class="text-center">
                          <strong>{{
                            $t("learning.writingModule.direction.contents.q5")
                          }}</strong>
                        </p>
                        <p class="text-center syllable">まえ</p>
                    <p class="text-danger" v-if="isValidQ8 === 'is-invalid'">mae</p>
                      </b-card-text>
                    </b-card>
                    <b-form-select
                      :class="isValidQ5"
                      v-model="q5"
                      :options="romajis"
                      size="md"
                    ></b-form-select>
                  </p>
                </div>
              </td>
              <td></td>
            </tr>
          </table>
        </b-col>
      </b-row>
      <b-row class="mt-3 ml-3">
        <b-button class="bg-primary" @click="checkAnswer" :disabled="emptyField">{{ $t("learning.writingModule.direction.button") }}</b-button>
      </b-row>
  </section>
</template>
<script>
export default {
  name: 'Direction',
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
      kanas: [
        { value: 'なか', text: 'なか' },
        { value: 'となり', text: 'となり' },
        { value: 'ひがし', text: 'ひがし' },
        { value: 'にし', text: 'にし' },
        { value: 'きた', text: 'きた' },
        { value: 'みなみ', text: 'みなみ' },
        { value: 'ひだり', text: 'ひだり' },
        { value: 'みぎ', text: 'みぎ' },
        { value: 'うえ', text: 'うえ' },
        { value: 'した', text: 'した' },
        { value: 'まえ', text: 'まえ' },
        { value: 'うしろ', text: 'うしろ' }
      ],
      romajis: [
        { value: 'migi', text: 'migi' },
        { value: 'ue', text: 'ue' },
        { value: 'shita', text: 'shita' },
        { value: 'mae', text: 'mae' },
        { value: 'ushiro', text: 'ushiro' },
        { value: 'naka', text: 'naka' },
        { value: 'tonari', text: 'tonari' },
        { value: 'hidari', text: 'hidari' },
        { value: 'higashi', text: 'higashi' },
        { value: 'nishi', text: 'nishi' },
        { value: 'kita', text: 'kita' },
        { value: 'minami', text: 'minami' }
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
      isValidQ12: ''
    }
  },
  computed: {
    emptyField () {
      return this.q1 === null || this.q2 === null || this.q3 === null || this.q4 === null ||
      this.q5 === null || this.q6 === null || this.q7 === null || this.q8 === null ||
      this.q9 === null || this.q10 === null || this.q11 === null || this.q12 === null
    }
  },
  methods: {
    checkAnswer () {
      this.isValidQ1 = this.q1 === 'hidari' ? 'is-valid' : 'is-invalid'
      this.isValidQ2 = this.q2 === 'migi' ? 'is-valid' : 'is-invalid'
      this.isValidQ3 = this.q3 === 'うえ' ? 'is-valid' : 'is-invalid'
      this.isValidQ4 = this.q4 === 'した' ? 'is-valid' : 'is-invalid'
      this.isValidQ5 = this.q5 === 'mae' ? 'is-valid' : 'is-invalid'
      this.isValidQ6 = this.q6 === 'ushiro' ? 'is-valid' : 'is-invalid'
      this.isValidQ7 = this.q7 === 'なか' ? 'is-valid' : 'is-invalid'
      this.isValidQ8 = this.q8 === 'となり' ? 'is-valid' : 'is-invalid'
      this.isValidQ9 = this.q9 === 'higashi' ? 'is-valid' : 'is-invalid'
      this.isValidQ10 = this.q10 === 'nishi' ? 'is-valid' : 'is-invalid'
      this.isValidQ11 = this.q11 === 'きた' ? 'is-valid' : 'is-invalid'
      this.isValidQ12 = this.q12 === 'みなみ' ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
