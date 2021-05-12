<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
    <b-navbar-brand href="#" class="navbar" ></b-navbar-brand>
    <img class="navIcon ml-auto" src="src/assets/Images/32_logo.png" alt="32 Degree Optical Logo">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-right">
        <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
        <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
.navIcon {

}

.navbar-nav > li{
  padding-left:30px;
  padding-right:30px;
}
</style>
