<template>
  <section class="number-area ptb_30">
    <div class="col-sm-12 ol-lg-12">
          <img
            class="img-fluid rounded mx-auto d-block mt-4"
            alt="Responsive image"
            :src="currImage"
            width="50%"
            @mouseover="viewRomaji('over')"
            @mouseout="viewRomaji('out')"
          />
    </div>
  </section>
</template>
<script>
export default {
  name: 'Market',
  data () {
    return {
      images: {
        out: '/assets/img/extravocab/colours.png',
        over: '/assets/img/extravocab/colours-romanised.png'
      },
      currImage: '/assets/img/extravocab/colours.png'
    }
  },
  methods: {
    viewRomaji (state) {
      this.currImage = this.images[state]
    }
  }
}
</script>
