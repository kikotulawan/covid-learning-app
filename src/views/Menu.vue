<template>
 <div class="start-page">
  <div class="col-12 d-flex justify-content-center align-items-center">
   <div class="return-btn-div">
    <button class="btn btn-sm rounded-pill shadow-none return-btn" @click="backBtn">
     <img src="https://img.icons8.com/material/16/000000/sort-left--v1.png" />
     BACK
    </button>
    <h5 class="menu-text">SELECT A GAME</h5>
    <audio ref="clickSound" src="../assets/audio/click.mp3"></audio>
    <audio ref="selectSound" src="../assets/audio/select-game.mp3"></audio>
   </div>
   <div class="container select-game-div">
    <div class="text-center">
     <button class="btn shadow-none">
      <img src="../assets/images/arrow.png" class="active-animate-right" width="64" height="64" alt="" @click="prev" />
     </button>
     <img v-if="step == 1" src="../assets/images/boy-with-mask.png" class="img-fluid mx-5" width="200" alt="" @click="dialog = true" />
     <img v-if="step == 2" src="../assets/images/girl-without-mask.png" class="img-fluid mx-5" width="200" alt="" @click="dialog = true" />
     <img v-if="step == 3" src="../assets/images/facemask.png" class="img-fluid mx-5" width="200" alt="" @click="gameOne" />
     <button class="btn shadow-none">
      <img src="../assets/images/arrow1.png" class="active-animate-left" width="64" height="64" alt="" @click="next" />
     </button>
    </div>
    <v-dialog v-model="dialog" width="auto">
     <v-card color="orange">
      <v-card-text class="text-light p-3 px-10 fw-bold text-center pt-10 mb-0 pb-0"
       >THIS GAME IS <br />
       COMING SOON!<br />
      </v-card-text>
      <v-card-actions>
       <v-spacer></v-spacer>
       <button class="btn home-btn rounded-pill btn-sm shadow-none fw-bold text-success" @click="dialog = false">Ok</button>
      </v-card-actions>
     </v-card>
    </v-dialog>
   </div>
  </div>
 </div>
</template>

<script>
 export default {
  data() {
   return {
    step: 3,
    activeLeft: true,
    dialog: false,
   };
  },
  methods: {
   backBtn() {
    this.$refs.clickSound.play();
    setTimeout(() => {
     this.$router.push('/');
    }, 200);
   },
   next() {
    if (this.step <= 2) {
     this.step++;
     this.$refs.clickSound.play();
    } else {
     this.step = 1;
     this.$refs.clickSound.play();
    }
   },
   prev() {
    if (this.step < 2) {
     this.step = 3;
     this.$refs.clickSound.play();
    } else {
     this.step--;
     this.$refs.clickSound.play();
    }
   },
   gameOne() {
    this.$refs.clickSound.play();
    setTimeout(() => {
     this.$router.push('/game/1');
    }, 100);
   },
  },
 };
</script>

<style></style>
