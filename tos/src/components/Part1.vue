<template>
  <div class="d-flex flex-column">
    <div
      class="d-flex justify-center mt-10"
    >
      <v-card
        min-width="95%"
        max-width="95%"
      >
        <v-card-title class="grey darken-2 white--text pt-0">Questions 1-2: Read a text aloud</v-card-title>
        <v-card-subtitle class="yellow lighten-5 black--text py-3 subtitle-1">Directions: In this part of the test, you will read aloud the text on the screen. You will have 45 seconds to prepare. Then you will have 45 seconds to read the text aloud.</v-card-subtitle>
      </v-card>
    </div>
    <div
      class="d-flex justify-center my-10"
    >
      <v-card
        min-width="95%"
        max-width="95%"
      >
        <v-card-title class="grey darken-2 white--text pt-0">Questions 1 of 11</v-card-title>
        <v-card-subtitle class="white black--text py-3 subtitle-1">Welcome to the Murfree Show! I am your host Connor Murfree. I’m sure you all know tonight is our finale for season 3. We have some great entertainment for you on tonight’s show. So for the last time, let me welcome my favorite, fabulous, marvelous and terrific co-host Brooke Grimsey!</v-card-subtitle>
        
        <!-- Componets : Time !! -->     
        <div 
          class="d-flex justify-center my-7"
          max-width="40%"  
        >
          <time-zone :preparationTime="3"></time-zone>
        </div>

      </v-card>
    </div>  
  </div>
</template>

<script>
import TimeZone from './Time'

export default {
  components : {
    'time-zone': TimeZone,
  },
  data: () => ({
    
  }),
}
</script>

<style>

</style>