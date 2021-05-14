<template>
  <div class="container-fluid pt-3 pb-3 ">
    <div class="d-flex justify-content-center ">
      <span :style="`font-size: ${20 + slideValue}px`" class="timer pt-4 pb-4">{{ timeStamp | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
    </div>
    <div class="d-flex justify-content-center pb-5">
      <Slider @slide="slideValue = $event"/>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Home/Slider";
export default {
name: "Clock",
  components: {Slider},
  data() {
    return {
      timeStamp: "",
      slideValue: 0,
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      this.timeStamp = dateTime;
    }
  }
}
</script>

<style scoped>
.timer {
  font-family: Montserrat;
  text-align: center;
  color: #313131;
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-animation:colorchange 20s infinite alternate;
}

@-webkit-keyframes colorchange {
  0% {

    color: blue;
  }

  10% {

    color: #8e44ad;
  }

  20% {

    color: #1abc9c;
  }

  30% {

    color: #d35400;
  }

  40% {

    color: blue;
  }

  50% {

    color: #34495e;
  }

  60% {

    color: blue;
  }

  70% {

    color: #2980b9;
  }
  80% {

    color: #f1c40f;
  }

  90% {

    color: #2980b9;
  }

  100% {

    color: pink;
  }
}
</style>
