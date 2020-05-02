<template>
    <div class="d-flex flex-column">
        <v-card>
            <v-card-title
                class="d-flex justify-center grey darken-3 py-0 my-0 "
            >
                <div class="white--text headline">
                    {{title}}
                </div>
            </v-card-title>
            <v-card-subtitle
                class="black--text my-0 py-0 text-center subtitle-1"
            >
                00:{{minutes}}:{{seconds}}
            </v-card-subtitle>
        </v-card>

        <!-- 녹음 버튼 -->
        <div class="d-flex justify-center">
            <v-btn v-if="resetButton" class="ma-4" color="red" fab depressed
                @click="resetTimer"
            >
                <v-icon large class="white--text">mic</v-icon>
            </v-btn>
            <v-btn v-else class="ma-4" fab dark depressed
                @click="startTimer"
            >
                <v-icon large dark>mic_none</v-icon>
            </v-btn>
        </div>

    </div>
</template>

<script>
export default {
    props: ['preparationTime'],

    data : () => ({
        title : 'PREPARATION',
        timer: null,
        resetButton: false,
        totalTime: 0
    }),

    mounted() {
        /* TODO
            0. props 로 전달받은 totalTime data로 넘겨주기
            1. Description 읽어주고
             끝나면!
            2. this.timer = startTimer()
        */
        this.totalTime = parseInt(this.preparationTime);
        this.startTimer();
    },

    computed: {
      minutes : function() {
          // console.log(this.totalTime);
          const minutes = Math.floor(this.totalTime / 60);
          return this.padTime(minutes);
      },
      seconds : function() {
          const seconds = this.totalTime - (this.minutes * 60);
          return this.padTime(seconds);
      },
    },
    
    methods : {
        startTimer: function() {
            /* TODO
              - 00:00:00 형태로 출력
              - props로 받은 totalTime 만큼 돌기 (seconds 단위)
            */
           console.log('startTime!!')
           this.timer = setInterval(() => this.countDown(), 1000);
           this.resetButton = true;
        },
        stopTimer: function() {
            this.totalTime = parseInt(this.preparationTime); // TODO : later remove this.
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
        },
        padTime: function(time) {
            return (time < 10 ? '0' : '' ) + time;
        },
        resetTimer: function() {
            console.log('End time');
            clearInterval(this.timer);
            this.totalTime = parseInt(this.preparationTime);
            this.timer = null;
            this.resetButton = false;
        },
        countDown: function() {
            console.log(this.totalTime);
            if(this.totalTime >= 1){
                this.totalTime-=1;
            } else {
                this.resetTimer();
                this.totalTime = 0;
            }
        }
        
    }
}
/*
timer 참조 : https://moonspam.github.io/Lets-make-a-Timer/ [moonsapm 님]
*/
</script>

<style>

</style>
