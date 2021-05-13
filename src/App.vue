<template>
  <div class="d-flex flex-column h-100">
    <Navbar />
    <home />
    <Footer class="mt-auto"/>
  </div>
</template>


<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "@/views/Home";
export default {
  name: "app",
  components: {
    Home,
    Navbar,
    Footer,
  },
};

</script>

<style lang="scss">

</style>
