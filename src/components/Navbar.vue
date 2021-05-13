<template>
  <b-navbar toggleable="lg" type="light" variant="light" sticky>
    <b-navbar-brand class="navbar"></b-navbar-brand>
    <img :to="{ name: 'Home' }" class="navIcon" :src="require('@/assets/Images/32_logo.png')" alt="32 Degree Optical Logo">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse class="d-flex justify-content-end" id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
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
width: 150px;
}

.navbar-nav > li{
  padding-left:30px;
  padding-right:30px;
  font-family: 'Montserrat', sans-serif;
}

.navbar {
  background-color: #d8e7ee !important;
}

.nav-link {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  padding-top: 15px;
  font-size: 25px;
}

.nav-link:hover {
  background-color: #afcbe7;
}
</style>
