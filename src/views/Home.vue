<template>
  <div class="container-fluid">
    <div class="container pt-5 d-flex justify-content-center">
      <b-carousel
          class="carouselImages"
          background="#bed3dd"
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          img-width="1024"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
      >

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://images.unsplash.com/photo-1614270263016-ce6e3f460154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt="Blue Snow Goggles on woman"></b-carousel-slide>
        <b-carousel-slide img-src="https://images.unsplash.com/photo-1600700468436-cc6a33f59b2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt="Blue Snow Goggles on woman"></b-carousel-slide>
        <b-carousel-slide img-src="https://images.unsplash.com/photo-1614613978065-f39965574567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt="Blue Snow Goggles on woman"></b-carousel-slide>
      </b-carousel>
    </div>

    <div class="headline pt-5">
      <h2>GOGGLES FOR COLD WEATHER</h2>
    </div>
    <Slider />
    <Contact />

  </div>
</template>

<script>
import Contact from "@/components/Home/Contact";
import Slider from "@/components/Home/Slider";
export default {
  components: {Slider, Contact},
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
.carouselImages {
  opacity: 80%;
  box-shadow: 5px 5px 15px 5px #bed3dd;
  background-color: unset;
  max-width: 800px;
}

.headline {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #165e9f;
}
</style>
