<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12 color">
          <img
            class="img-fluid rounded mx-auto d-block mt-4 image1"
            alt="Responsive image"
            :src="$root.currImage"
            width="60%"
          />
          <div @click="$root.viewImage('color')">
          <img
            class="img-fluid rounded mx-auto d-block mt-4 image2"
            alt="Responsive image"
            src="/assets/img/extravocab/Button_extra.png"
          />
          </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted () {
    this.$root.currImage = '/assets/img/extravocab/colours.png'
  }
}
</script>

<style scoped>
.color {
  position: relative;
  top: 0;
  left: 0;
}
.image1 {
  position: relative;
  top: 0;
  left: 0;
}
.image2 {
  position: absolute;
  top: 570px;
  left: 1150px;
  width: 80px;
  height: 80px;
}
</style>
