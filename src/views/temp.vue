<template>
 <div class="mt-10 d-flex justify-content-center align-items-center">
  <div class="card border-0">
   <div>
    <drag class="drag" :draggable="one" :transfer-data="{ one }" drop-effect="copy"><img v-if="one" src="../assets/images/facemask.png" alt="" class="img-fluid" width="200" /></drag>
    <drag class="drag" :draggable="two" :transfer-data="{ two }" drop-effect="move"><img v-if="two" src="../assets/images/facemask.png" alt="" class="img-fluid" width="200" /></drag>
    <drag class="drag" :draggable="three" :transfer-data="{ three }" drop-effect="link"><img v-if="three" src="../assets/images/facemask.png" alt="" class="img-fluid" width="200" /></drag>
    <drag class="drag" :draggable="four" :transfer-data="{ four }" drop-effect="none"><img v-if="four" src="../assets/images/facemask.png" alt="" class="img-fluid" width="200" /></drag>
   </div>
   <div>
    <div>
     <drop class="drop" :class="{ over }" @dragover="over = true" @dragleave="over = false" @drop="handleDrop">
      <img v-if="personone" src="../assets/images/facemask-off.png" alt="" class="img-fluid" width="200" />
      <img v-else src="../assets/images/facemask-on.png" alt="" class="img-fluid" width="200" />
     </drop>
     <drop class="drop" :class="{ over }" @dragover="over = true" @dragleave="over = false" @drop="handleDrop1">
      <img v-if="persontwo" src="../assets/images/facemask-off.png" alt="" class="img-fluid" width="200" />
      <img v-else src="../assets/images/facemask-on.png" alt="" class="img-fluid" width="200" />
     </drop>
     <drop class="drop" :class="{ over }" @dragover="over = true" @dragleave="over = false" @drop="handleDrop2">
      <img v-if="personthree" src="../assets/images/facemask-off.png" alt="" class="img-fluid" width="200" />
      <img v-else src="../assets/images/facemask-on.png" alt="" class="img-fluid" width="200" />
     </drop>
     <drop class="drop" :class="{ over }" @dragover="over = true" @dragleave="over = false" @drop="handleDrop3">
      <img v-if="personfour" src="../assets/images/facemask-off.png" alt="" class="img-fluid" width="200" />
      <img v-else src="../assets/images/facemask-on.png" alt="" class="img-fluid" width="200" />
     </drop>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
 import { Drag, Drop } from 'vue-drag-drop';
 export default {
  components: { Drag, Drop },
  data: function () {
   return { over: false, one: true, two: true, three: true, four: true, personone: true, persontwo: true, personthree: true, personfour: true, totalMasked: 0 };
  },
  watch: {
   totalMasked: function (value) {
    if (value == 4) {
     this.$toast.info('finished');
     this.totalMasked = 0;
     setTimeout(() => {
      (this.personone = true), (this.one = true);
      (this.persontwo = true), (this.two = true);
      (this.personthree = true), (this.three = true);
      (this.personfour = true), (this.four = true);
     }, 500);
    }
   },
  },
  methods: {
   handleDrop(data) {
    if (data.one) return (this.personone = false), (this.one = false), this.totalMasked++;
    if (data.two) return (this.personone = false), (this.two = false), this.totalMasked++;
    if (data.three) return (this.personone = false), (this.three = false), this.totalMasked++;
    if (data.four) return (this.personone = false), (this.four = false), this.totalMasked++;
   },
   handleDrop1(data) {
    if (data.one) return (this.persontwo = false), (this.one = false), this.totalMasked++;
    if (data.two) return (this.persontwo = false), (this.two = false), this.totalMasked++;
    if (data.three) return (this.persontwo = false), (this.three = false), this.totalMasked++;
    if (data.four) return (this.persontwo = false), (this.four = false), this.totalMasked++;
   },
   handleDrop2(data) {
    if (data.one) return (this.personthree = false), (this.one = false), this.totalMasked++;
    if (data.two) return (this.personthree = false), (this.two = false), this.totalMasked++;
    if (data.three) return (this.personthree = false), (this.three = false), this.totalMasked++;
    if (data.four) return (this.personthree = false), (this.four = false), this.totalMasked++;
   },
   handleDrop3(data) {
    if (data.one) return (this.personfour = false), (this.one = false), this.totalMasked++;
    if (data.two) return (this.personfour = false), (this.two = false), this.totalMasked++;
    if (data.three) return (this.personfour = false), (this.three = false), this.totalMasked++;
    if (data.four) return (this.personfour = false), (this.four = false), this.totalMasked++;
   },
  },
 };
</script>

<style>
 html {
  font-family: 'Arial', sans-serif;
 }
 body {
  padding: 40px 90px;
  line-height: 1.5;
 }
 .drop.allowed {
  background-color: #dfd;
 }
 .drag,
 .drop {
  box-sizing: border-box;
  display: inline-block;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  vertical-align: middle;
  margin-right: 20px;
  position: relative;
  padding: 5px;
  padding-top: 35px;
  text-align: center;
  margin: 3px;
 }
</style>
