<template>
  <div class="d-flex flex-column h-100">
    <Navbar />
    <b-container
        v-if="$route.name !== 'Home'"
        fluid
        class="flex-grow-1"
        :class="$route.name === 'Home' ? '' : 'darkBackground'"
    >
      <router-view class="container"/>
    </b-container>
    <router-view v-else/>
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
