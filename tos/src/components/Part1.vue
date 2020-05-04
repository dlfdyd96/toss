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
        <v-card-subtitle class="yellow lighten-5 black--text py-3 subtitle-1"> {{ directions }} </v-card-subtitle>
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
        <v-card-subtitle class="white black--text py-3 subtitle-1">
          <span v-for="(index, i) in sentences" :key="i" @click="speech(index, i)"
            :class="[activateIndex == i ? 'red--text': 'black--text']"
          >
            {{ index }}
          </span>
        </v-card-subtitle>
        
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
import Part1Sentence from '../assets/part1.json'

export default {
  data: () => ({
    directions : '',
    sentences : [],
    voices : [],
    activateIndex : -1,
  }),
  components : {
    'time-zone': TimeZone,
  },

  created() {
    console.log('created Start');
    /* token Sentence */
    this.tokenSentences();

    /* voice 설정 */
    this.setVoiceList();
    if (window.speechSynthesis.onvoiceschanged !== undefined)
      window.speechSynthesis.onvoiceschanged = this.setVoiceList;
    // console.log(this.voices);
    
    /* directions 발음 시작 */
    this.directions = Part1Sentence.directions;
    console.log('created End');
  },
  mounted() {
    /* directions 발음 시작 */
    // this.speech(this.directions);
  },

  methods: {
    tokenSentences : function() {
      let sentence = Part1Sentence.sentences[0].sentence;
      let substring = "";
      for(let i in sentence) {
        substring += sentence[i];
        if (sentence[i] == '!' || sentence[i] == '?' || sentence[i] == '.') {
          this.sentences.push(substring.trim());
          // console.log(substring);
          substring = "";
        }
      }
    },

    setVoiceList : function(){
      console.log(' - set Voice List Start');
      this.voices = window.speechSynthesis.getVoices();
      console.log(' - set Voice List End');
    },
    speech: function(text, index) {
      console.log(index);
      this.activateIndex = index;
      // console.log('ㅁㄴㅇㄹ: '+ this.activateIndex)
      console.log('clicked text!')
      if(!window.speechSynthesis){
        alert('음성 재생을 지원하지 않는 브라우저 입니다. 최신 브라우저를 이용 하십시오.');
        return ;
      }
      // let lang = '';
      let utterThis = new SpeechSynthesisUtterance(text);
      utterThis.onstart = function(/* event */){
        console.log('start' + this.activateIndex);
      }
      // utterThis.onend = function(event){
      //   console.log('end');
      //   console.log(this.activateIndex)
      // }
      utterThis.onend = this.onEndUtter;
      utterThis.onerror = function(event){
        console.log('error', event);
      }
      let voiceFound = false; 
      for(let i in this.voices) {
        // console.log(this.voices[i]);
        if (this.voices[i].lang.indexOf("en-US") >= 0 || this.voices[i].lang.indexOf("en_US") >= 0) {
          utterThis.voice = this.voices[i];
          voiceFound = true;
        }
      }
      if(!voiceFound) {
        console.log('voice not found');
        alert('voice not found');
        return;
      }
      utterThis.lang = 'en-US';
      utterThis.pitch = 1;
      utterThis.rate = 1;
      window.speechSynthesis.speak(utterThis);
    },
    // selectedSent: function(index){
    //   if (index == this.activateIndex) {
    //     return 'white--text'
    //   } else {
    //     return 'black--text'
    //   }
    // }
    onEndUtter : function(/* event */) {
      console.log('end');
      this.activateIndex = -1;
    }
  }
}
</script>

<style>

</style>