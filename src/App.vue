<template>
 <v-app id="inspire">
  <v-main>
   <div class="speaker">
    <audio ref="bgSound" src="./assets/audio/bg-music.mp3" autoplay loop></audio>
    <audio ref="clickSound" src="./assets/audio/click.mp3"></audio>
    <button v-if="!play" class="btn btn-sm shadow-none" @click="playVideo"><v-icon color="orange">mdi-volume-off</v-icon></button>
    <button v-if="play" class="btn btn-sm shadow-none" @click="pauseVideo"><v-icon color="orange">mdi-volume-high</v-icon></button>
   </div>
   <router-view></router-view>
  </v-main>
 </v-app>
</template>
<script>
 export default {
  data() {
   return {
    play: false,
   };
  },
  mounted() {
   this.playVideo();
  },
  methods: {
   playVideo() {
    this.$refs.clickSound.play();
    this.play = true;
    this.$refs.bgSound.play();
   },
   pauseVideo() {
    this.$refs.clickSound.play();
    this.play = false;
    this.$refs.bgSound.pause();
   },
  },
 };
</script>
