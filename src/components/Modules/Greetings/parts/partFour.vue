<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 col-lg-12 text-center">
        <b-row>
            <b-col cols="3" style="margin-top:80px;">
                <b-card>
                    <b-card-text>
                        <h5 class="syllable">いってらっしゃい</h5>
                        <p class="mt-2"><strong>Itterasshai</strong></p>
                        <p>{{ $t("learning.greetings.partFour.itterasshai") }}</p>
                    </b-card-text>
                </b-card>
            </b-col>
             <b-col cols="3">
            <img
            class="img-fluid rounded mx-auto d-block mt-4"
            alt="Responsive image"
            src="/assets/img/greetings/part4/Asset 9.png"
            width="80%"
          />
            </b-col>
            <b-col cols="3">
            <img
            class="img-fluid rounded mx-auto d-block mt-4"
            alt="Responsive image"
            src="/assets/img/greetings/part4/Asset 10.png"
            width="80%"
          />
            </b-col>
            <b-col cols="3" style="margin-top:80px;">
                <b-card>
                    <b-card-text>
                        <h5 class="syllable">いってきます</h5>
                        <p class="mt-2"><strong>Ittekimasu</strong></p>
                        <p>{{ $t("learning.greetings.partFour.ittekimasu") }}</p>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="3">
            <img
            class="img-fluid rounded mx-auto d-block mt-4"
            alt="Responsive image"
            src="/assets/img/greetings/part4/Asset 11.png"
            width="70%"
          />
            </b-col>
            <b-col cols="6" style="margin-top:80px;">
                <b-card>
                    <b-card-text>
                        <h5 class="syllable">はじめまして。わたしはアミナです。
                        どうぞよろしくおねがいします。</h5>
                        <p class="mt-2"><strong>Hajimemashite</strong></p>
                        <p>{{ $t("learning.greetings.partFour.hajimemashite") }}</p>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
  </section>
</template>
<script>
export default {
  name: 'partFour'
}
</script>
