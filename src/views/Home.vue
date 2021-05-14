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
      <b-container class="bv-example-row">
        <b-row>
          <b-col class="cards p-5">
            <b-icon class="drop pb-5" style="width: 100px; height: 100px;" icon="droplet-fill" animation="cylon-vertical"></b-icon>
            <br>
              <p class="description"><Strong>GOGGLES</Strong></p>
            <br>Quisque efficitur augue non ex eleifend vulputate. Vivamus posuere leo magna, aliquam placerat erat sollicitudin vitae. Etiam a accumsan mauris.</b-col>
          <b-col class="cards p-5">
            <b-icon class="drop pb-5" style="width: 100px; height: 100px;" icon="droplet-half" animation="cylon-vertical"></b-icon>
            <br>
              <p class="description"><Strong>RX GOGGLES</Strong></p>
            <br>Quisque efficitur augue non ex eleifend vulputate. Vivamus posuere leo magna, aliquam placerat erat sollicitudin vitae. Etiam a accumsan mauris.</b-col>
          <b-col class="cards p-5">
            <b-icon class="drop pb-5" style="color: #d8e7ee; width: 100px; height: 100px;" icon="droplet" animation="cylon-vertical"></b-icon>
            <br>
              <p class="description"><Strong>SUNGLASSES</Strong></p>
            <br>Quisque efficitur augue non ex eleifend vulputate. Vivamus posuere leo magna, aliquam placerat erat sollicitudin vitae. Etiam a accumsan mauris.</b-col>
        </b-row>
          <div class="pt-4">
            <b-button
              v-for="link in links"
              :key="link.link"
              :to="{ name: link.link }"
              class="formButton">
              LEARN MORE
            </b-button>
          </div>
      </b-container>
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
      slideValue: 0,
      links: [
        { name: "About", link: "About" },
      ]
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

.formButton {
  background-color: #d8e7ee !important;
  color: black !important;
  font-size: 20px !important;
  font-family: 'Montserrat', sans-serif;
  border: unset !important;
  margin-bottom: 15px;
  letter-spacing: 3px;
  padding: 15px !important;
}

.formButton:hover {
  background-color: #afcbe7 !important;
  color: white !important;
  font-family: 'Montserrat', sans-serif;
  border: unset;
}

.description {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 3px;
}
.cards {
  background-color: #afcbe7;
  margin: 15px;
  box-shadow: 5px 5px 15px 5px #c2d2d6;
}

.drop {
  color: #d8e7ee !important;
}

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
  font-size: 40px;
  letter-spacing: 8px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;

}

.ptext .border {
  background-color: #ecf0f1;
  color: #3a445d;
  padding: 20px;
  border: 1px solid #3a445d !important;
  opacity: 0.9;
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
