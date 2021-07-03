<template>
  <section class="number-area ptb_30 overflow-hidden">
    <div class="col-sm-12 ol-lg-12">
    <div class="partOne text-center">
        <b-row>
            <b-col cols="2" style="margin-left:700px;">
                <b-card>
                    <b-card-text>
                        <h5 class="syllable">おはようございます</h5>
                        <p class="mt-2"><strong>Ohayou gozaimasu</strong></p>
                        <p>{{ $t("learning.greetings.partOne.ohayo") }}</p>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="2" style="margin-left:350px; margin-top: 200px;">
                <b-card>
                    <b-card-text>
                        <h5 class="syllable">こんにちは</h5>
                        <p class="mt-2"><strong>Konnichiwa</strong></p>
                        <p>{{ $t("learning.greetings.partOne.konnichiwa") }}</p>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
              <b-row>
            <b-col cols="2" style="margin-left:250px; margin-top: 150px;">
                <b-card>
                    <b-card-text>
                        <h5 class="syllable">こんばんは</h5>
                        <p class="mt-2"><strong>Konbanwa</strong></p>
                        <p>{{ $t("learning.greetings.partOne.konbanwa") }}</p>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="2" style="margin-left:530px; margin-top: 100px;">
                <b-card>
                    <b-card-text>
                        <h5 class="syllable">おやすみなさい</h5>
                        <p class="mt-2"><strong>Oyasuminasai</strong></p>
                        <p>{{ $t("learning.greetings.partOne.oyasuminasai") }}</p>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'partOne'
}
</script>
<style scoped>
.partOne {
    background: url('/assets/img/greetings/Asset 1.png');
    background-position: center;
    background-size: contain;
    min-height: 1000px;
    background-repeat:no-repeat;
}
</style>
