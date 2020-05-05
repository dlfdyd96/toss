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
        <v-card-title class="grey darken-2 white--text pt-0">Questions 4-6: Respond to Questions</v-card-title>
        <v-card-subtitle class="yellow lighten-5 black--text py-3 subtitle-1"> {{ directions }} </v-card-subtitle>
      </v-card>
    </div>
    <!-- Situation -->
    <div
      class="d-flex justify-center mt-10"
    >
      <v-card
        min-width="95%"
        max-width="95%"
      >
        <v-card-title class="grey darken-2 white--text pt-0">Questions 4-6 of 11</v-card-title>
        <v-card-subtitle class="white black--text py-3 subtitle-1"> {{ situation }} </v-card-subtitle>
      </v-card>
    </div>
    <!-- Questions -->
    <div
      v-for="(index, i) in questions"
      :key="i"
      class="d-flex justify-center mt-10"
    >
      <v-card
        min-width="95%"
        max-width="95%"
      >
        <v-card-title class="grey darken-2 white--text pt-0">Questions {{4 + i }} of 11</v-card-title>
        <v-card-subtitle class="white black--text py-3 subtitle-1">{{ index }}
        <div v-if="i==2">
          <br>
          <div v-for="(sel, j) in selections" :key="j">
            - {{sel}}
          </div>
        </div></v-card-subtitle>
        <!-- Componets : Time !! -->
        <div 
          class="d-flex justify-center my-7"
          max-width="40%"  
        >
          <!-- <time-zone :preparationTime="`${i == 2 ? 30: 15}`"></time-zone> -->
          <time-zone :preparationTime="0"></time-zone>
        </div>

      </v-card>
    </div> 
    <!-- Next or Previous page -->
    <div
      class="d-flex justify-center py-10"
    >
      <v-btn class="white--text subtitle-1 mr-3" text @click="prevPage" v-text="`< 이전`"></v-btn>
      <v-btn class="white--text subtitle-1 ml-3" text @click="nextPage" v-text="`다음 >`"></v-btn>
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
    situation : '',
    questions : [],
    selections : [],
    currentPage : 0,
    totalPage : 1,
  }),
  created() {
    const {
      part3
    } = Solve;
    this.totalPage = part3.length;
    // Todo : 나중에 고쳐~
    // this.directions = directions;
    // this.situation = situation;
    // this.questions.push(q4, q5, q6);
    // this.selections = selections;
    this.directions = part3[0].directions;
    this.situation = part3[0].questions.situation;
    this.questions.push(part3[0].questions.q4, part3[0].questions.q5, part3[0].questions.q6);
    this.selections = part3[0].questions.selections;
  },
  methods: {
    prevPage: function() {
      if(this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
    nextPage: function() {
      if(this.currentPage < this.totalPage) {
        this.currentPage += 1;
      }
    }
  }

}
</script>

<style>

</style>