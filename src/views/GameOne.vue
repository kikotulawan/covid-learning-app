<template>
 <div class="game-one">
  <div class="col-12 d-flex justify-content-center align-items-center">
   <button class="btn home-btn rounded-pill btn-sm shadow-none" @click="home">
    <audio ref="clickSound" src="../assets/audio/click.mp3"></audio>
    <img src="https://img.icons8.com/material/16/000000/sort-left--v1.png" />
    MENU
   </button>
   <div class="container">
    <div v-if="correct == 0">
     <img @click="wrongAns" :hidden="hideWrong" class="g1-1" src="../assets/images/boy-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g1-2" src="../assets/images/boy1-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g1-3" src="../assets/images/girl1-without-mask.png" width="90" height="90" alt="" />
     <img @click="correctAns1" class="g1-4" src="../assets/images/girl-with-mask.png" width="90" height="90" alt="" />
    </div>
    <div v-if="correct == 1">
     <img @click="wrongAns" :hidden="hideWrong" class="g2-1" src="../assets/images/boy-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g2-5" src="../assets/images/boy-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g2-4" src="../assets/images/girl-without-mask.png" width="90" height="90" alt="" />
     <img @click="correctAns1" class="g2-2" src="../assets/images/boy-with-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g2-3" src="../assets/images/girl1-without-mask.png" width="90" height="90" alt="" />
    </div>
    <div v-if="correct == 2">
     <img @click="wrongAns" :hidden="hideWrong" class="g3-1" src="../assets/images/boy-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g3-4" src="../assets/images/girl-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g3-2" src="../assets/images/boy1-without-mask.png" width="90" height="90" alt="" />
     <img @click="correctAns1" class="g3-3" src="../assets/images/girl1-with-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g3-5" src="../assets/images/boy-without-mask.png" width="90" height="90" alt="" />
    </div>
    <div v-if="correct == 3">
     <img @click="correctAns2" class="g3-1" src="../assets/images/boy-with-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g3-4" src="../assets/images/girl-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g3-2" src="../assets/images/boy1-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g3-3" src="../assets/images/girl1-without-mask.png" width="90" height="90" alt="" />
     <img @click="wrongAns" :hidden="hideWrong" class="g3-5" src="../assets/images/boy-without-mask.png" width="90" height="90" alt="" />
    </div>
    <v-dialog v-model="dialog" width="auto">
     <v-card color="orange">
      <v-card-text class="text-light fw-bold text-center pt-10 mb-0 pb-0"
       >SELECT ALL PEOPLE WITH FACE MASK <br />
       TO SAVE THEM FROM PEOPLE WITHOUT <br />
       FACE MASK!
      </v-card-text>
      <v-card-actions>
       <v-spacer></v-spacer>
       <button class="btn home-btn rounded-pill btn-sm shadow-none fw-bold text-success" @click="startGame">
        <audio ref="clickSound" src="../assets/audio/click.mp3"></audio>
        <audio ref="correctSound" src="../assets/audio/correct-sound.mp3"></audio>
        <audio ref="incorrectSound" src="../assets/audio/incorrect-sound.mp3"></audio>
        Let's Go
       </button>
      </v-card-actions>
     </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" width="auto">
     <v-card color="orange">
      <v-card-text class="text-light fw-bold text-center pt-10 mb-0 pb-0"
       >YEHEY! CONGRATULATIONS! <br />
       YOU JUST SAVED THEM FROM <br />
       COVID!
      </v-card-text>
      <v-card-actions>
       <v-spacer></v-spacer>
       <button class="btn home-btn rounded-pill btn-sm shadow-none fw-bold text-success" @click="endGame">Return Home</button>
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
    dialog: true,
    dialog2: false,
    correct: 0,
    hideWrong: false,
   };
  },
  mounted() {
   //    this.$confetti.start();
  },
  methods: {
   home() {
    this.$refs.clickSound.play();
    setTimeout(() => {
     this.$router.push('/menu');
    }, 200);
   },
   endGame() {
    this.$refs.clickSound.play();
    setTimeout(() => {
     this.$router.push('/menu');
    }, 200);
   },
   startGame() {
    this.$refs.clickSound.play();
    this.dialog = false;
   },
   correctAns1() {
    this.$refs.correctSound.play();
    this.hideWrong = true;
    setTimeout(() => {
     this.correct++;
     this.hideWrong = false;
    }, 1300);
   },
   correctAns2() {
    this.$refs.correctSound.play();
    this.$confetti.start();
    setTimeout(() => {
     this.$confetti.stop();
    }, 1200);
    this.dialog2 = true;
   },
   wrongAns() {
    this.$refs.incorrectSound.play();
   },
  },
 };
</script>

<style></style>
