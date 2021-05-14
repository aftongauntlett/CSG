<template>
  <div class="container-fluid pb-5">
    <div class="aboutUs container pt-3">
      <h2 class="pb-3 pt-5">ABOUT US</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor magna faucibus lorem facilisis egestas. Suspendisse interdum scelerisque auctor. Nam sit amet sodales ipsum, sit amet malesuada eros. Etiam sed egestas massa, vitae cursus tellus. Phasellus ac mauris rutrum, iaculis lorem nec, auctor metus.</p>
      <p>Suspendisse at elementum quam. Donec imperdiet rutrum dui, eu tincidunt nisl ornare sed. In massa arcu, aliquam vel semper eget, porta id mi. Mauris maximus nec velit at bibendum. Donec sodales nisl arcu, a ullamcorper nunc bibendum ut. Etiam convallis quam velit, at feugiat nulla pharetra ac. Cras non orci faucibus, mollis enim id, tincidunt felis.</p>
    </div>
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
      <h2 :style="`font-size: ${20 + slideValue}px`">SLIDE TO CHANGE MY SIZE</h2>
    </div>
    <Slider @slide="slideValue = $event"/>
  </div>
</template>

<script>
import Contact from "@/components/Home/Contact";
import Slider from "@/components/Home/Slider";
import Clock from "@/components/Home/Clock";
export default {
  components: {Clock, Slider, Contact},
  data() {
    return {
      slide: 0,
      sliding: null,
      slideValue: 0
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
  opacity: 0.8;
  box-shadow: 5px 5px 15px 5px #bed3dd;
  background-color: unset;
  max-width: 800px;
}

.headline {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #6b6d7a;
}

.aboutUs {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #6b6d7a;
}
</style>
















