<template>
<div class="footer">
  <b-container class="bv-example-row">
    <b-row>
      <b-col sm>
        <p class="pt-4"><strong>FIND US</strong></p>
        <p>123 Fake Street</p>
        <p>Fake, FA 12345</p>
      </b-col>

      <b-col sm>
        <p class="pt-4"><strong>CONTACT US</strong></p>
        <p>555-555-5555</p>
        <a href="mailto:aftonasmith@gmail.com">Fake@Random.com</a>
      </b-col>
    </b-row>
    <b-button
        to="/"
        variant="link"
        @click.native="scrollToTop">
    <img
        class="footerIcon"
        :src="require('@/assets/Images/32_logo.png')"
        alt="32 Degree Optics Logo">
    </b-button>


  </b-container>
    <div class="footerFont">&copy;2021 Copyright 32° Optics</div>
</div>



</template>

<script>
import Clock from "@/components/Home/Clock";
export default {
  components: {Clock},
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
};
</script>

<style scoped>
.footerFont {
  color: #868a8a;
  padding-top: 30px;
  text-align: center;
  border-top: solid #c8cacd 1px;
}

.footer {
  background-color: #d8e7ee;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: 20px;
}

.footerIcon {
  width: 150px;
}

</style>
