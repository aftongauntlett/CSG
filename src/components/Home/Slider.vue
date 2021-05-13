<template>
  <div class="slider container-fluid">
    <vue-slider v-model="value" @change="$emit('slide', value)"/>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style>
.slider {
  max-width: 500px;
  padding-top: 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;

}
</style>
