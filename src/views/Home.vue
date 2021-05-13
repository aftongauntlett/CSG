<template>
  <div class="home">
    <div class="pimg1">
      <div class="ptext">
        <span class="border">32° OPTICS</span>
      </div>
    </div>

    <section class="section section-light">
      <div class="container">
        <Clock />
      </div>
    </section>

    <div class="pimg2"></div>

    <section class="section section-dark">
      <h2>CONTACT US</h2>
      <Contact />
    </section>
    <div class="pimg3"></div>
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

.pimg1, .pimg2, .pimg3 {
  position: relative;
  opacity: 0.70;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.pimg1 {
  background-image: url("https://images.unsplash.com/photo-1614358536373-1ce27819009e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80");
  min-height: 70vh;

}

.pimg2 {
  background-image: url("https://images.unsplash.com/photo-1596473536501-16348778be90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  min-height: 400px;
}

.pimg3 {
  background-image: url("https://images.unsplash.com/photo-1582125928999-4b5378e036d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");
  min-height: 400px;
}

.section {
  text-align: center;
  padding: 50px 80px;
}

.section-light {
  background-color: #f6f8fa;
  color: #666;
}

.section-dark{
  background-color: #282e34;
  color: #f5f5f8;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 3px;
}

.ptext {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 27px;
  letter-spacing: 8px;
  text-transform: uppercase;
}

.ptext .border {
  background-color: #111;
  color: #f5f5f8;
  padding: 20px;
}

.ptext .border.trans {
  background-color: transparent!important;
}

@media (max-width: 568px){
  .pimg3, .pimg2, .pimg1 {
    background-attachment: scroll;
  }
  .border {
    font-size: 14px;
  }

  .section {
    padding: 15px 15px;
  }

  .ptext {
    font-size: 16px;
  }
}

</style>
