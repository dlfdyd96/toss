<template>
  <div class="d-flex flex-column">
    <!-- Directions -->
    <div
      class="d-flex justify-center mt-10"
    >
      <v-card
        min-width="95%"
        max-width="95%"
      >
        <v-card-title class="grey darken-2 white--text pt-0">Questions 3: Describe a picture</v-card-title>
        <v-card-subtitle class="yellow lighten-5 black--text py-3 subtitle-1"> {{ directions }} </v-card-subtitle>
      </v-card>
    </div>
    <!-- Questions -->
    <div
      class="d-flex justify-center mt-10"
    >
      <v-card
        min-width="95%"
        max-width="95%"
      >
        <v-card-title class="grey darken-2 white--text py-0">Questions 3 of 11</v-card-title>
          <v-card class="ma-4">
          
            <v-img :src="pictures[currentPage].picture"></v-img>  
          </v-card>
        <!-- Componets : Time !! -->     
        <div 
          class="d-flex justify-center my-7"
          max-width="40%"  
        >
          <time-zone :preparationTime="3"></time-zone>
        </div>

      </v-card>
    </div> 
    <!-- Next or Previous page -->
    <div
      class="d-flex justify-center py-10"
    >
      <v-btn class="white--text subtitle-1 mr-3" text @click="prevPicture" v-text="`< 이전`"></v-btn>
      <v-btn class="white--text subtitle-1 ml-3" text @click="nextPicture" v-text="`다음 >`"></v-btn>
    </div>
  </div>
</template>

<script>
import TimeZone from './Time'
import Solve from '../assets/solve.json';

export default {
  components : {
    'time-zone': TimeZone,
  },
  data : () => ({
    directions : '',
    pictures : [],
    currentPage : 0,
  }),
  created() {
    const {
      part2 : {
        directions,
        pictures 
      }
    } = Solve;
    this.directions = directions;
    this.pictures = pictures;
  },
  methods: {
    prevPicture: function() {
      if(this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
    nextPicture: function() {
      if(this.currentPage < this.pictures.length - 1) {
        this.currentPage += 1;
      }
    }
  }

}
</script>

<style>

</style>