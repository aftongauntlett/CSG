<template>
  <b-navbar toggleable="md" type="light" variant="light" sticky>
    <b-navbar-brand class="navbar"></b-navbar-brand>
    <img :to="{ name: 'Home' }" class="navIcon" :src="require('@/assets/Images/32_logo.png')" alt="32 Degree Optical Logo">
    <b-navbar-toggle target="navbar-toggle-collapse">
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" class="justify-content-md-end" is-nav>
      <b-navbar-nav>
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
width: 125px;
}

.navbar-nav > li{
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-collapse {
  padding: unset !important;
}

.navbar {
  background-color: #d8e7ee !important;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  padding-top: 15px;
  font-size: 25px;
}

.nav-link:hover {
  background-color: #afcbe7;
}

.navbar-collapse {
  padding-left: 100px;
}
</style>
