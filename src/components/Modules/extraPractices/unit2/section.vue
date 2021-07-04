<template>
  <section class="number-area ptb_50">
    <div class="container">
      <div class="col-sm-12 ol-lg-12">
        <div class="alert alert-info" role="alert">
          <p>{{ $t("learning.moduleTwo.instruction") }}</p>
        </div>
        <b-button class="bg-primary" v-b-modal.modal-unitTwo>{{
          $t("learning.moduleTwo.button")
        }}</b-button>
       <b-row>
               <audio controls style="margin-left: 400px;">
              <source src="/assets/sounds/listening/karangan_nekono_tama(edit).mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
       </b-row>
        <b-row class="mt-4">
          <b-col>
            <img
              class="img-fluid rounded mx-auto d-block mt-4"
              alt="Responsive image"
                src="/assets/img/unit/03.png"
              width="100%"
            />
          </b-col>
          <b-col>
            <img
              class="img-fluid rounded mx-auto d-block mt-4"
              alt="Responsive image"
                 src="/assets/img/unit/04.png"
              width="100%"
            />
          </b-col>
        </b-row>
        <modal :modalId="'modal-unitTwo'" :modalTitle="$t('learning.moduleFirst.modalInstruction')" >
          <div class="answer" slot="content">
            <img
              alt="Responsive image"
              src="/assets/img/unit/05.png"
              width="100%"
            />
          </div>
        </modal>
      </div>
    </div>
  </section>
</template>
<script>
import Modal from '../../../Modal/Modal'
export default {
  components: { Modal }
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
