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
        <p>Fake@email.com</p>
      </b-col>
    </b-row>
    <img :to="{ name: 'Home' }" class="footerIcon" :src="require('@/assets/Images/32_logo.png')" alt="32 Degree Optics Logo">
  </b-container>
    <div class="footerFont">&copy;2021 Copyright 32° Optics</div>
</div>



</template>

<script>
export default {
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
