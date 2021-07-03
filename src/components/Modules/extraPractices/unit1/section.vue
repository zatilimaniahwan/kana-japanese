<template>
  <section class="number-area ptb_50">
    <div class="container">
      <div class="col-sm-12 ol-lg-12">
        <div class="alert alert-info" role="alert">
          <p>{{ $t("learning.moduleFirst.instruction") }}</p>
        </div>
        <b-button class="bg-primary" v-b-modal.modal-1>{{
          $t("learning.moduleFirst.button")
        }}</b-button>
        <b-row class="mt-4">
          <b-col>
            <audio controls style="margin-left: 400px;">
              <source src="/assets/sounds/listening/karangan_ryugakusei.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <img
              class="img-fluid rounded mx-auto d-block mt-4"
              alt="Responsive image"
              src="/assets/img/unit/01.png"
              width="70%"
            />
          </b-col>
        </b-row>
        <b-modal
          id="modal-1"
          :hide-footer=true
          :title="$t('learning.moduleFirst.modalInstruction')"
        >
          <div class="answer">
            <img
              alt="Responsive image"
              src="/assets/img/unit/02.png"
              width="100%"
            />
          </div>
        </b-modal>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Section'
}
</script>

<style scoped>
.answer img {
  transition: transform 0.25s ease;
}

.answer img:hover {
  -webkit-transform: scale(1.5); /* or some other value */
  transform: scale(3);
}
</style>
