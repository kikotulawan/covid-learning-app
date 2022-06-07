<template>
 <div class="start-page">
  <div class="col-12 d-flex flex-column justify-content-center align-items-center">
   <div class="text-center">
    <h1 class="kids-text">KIDS</h1>
    <h1 class="vs-text">vs</h1>
    <h1 class="covid-text">COVID</h1>
   </div>
   <div class="mt-3">
    <button class="btn btn-sm rounded-pill start-btn active-animate-down" @click="check">START</button>
    <audio ref="clickSound" src="../assets/audio/click.mp3"></audio>
   </div>
  </div>
 </div>
</template>

<script>
 export default {
  methods: {
   check() {
    this.$refs.clickSound.play();
    setTimeout(() => {
     this.$router.push('/menu');
    }, 100);
   },
   exitApp() {
    window.close();
   },
  },
 };
</script>

<style></style>
