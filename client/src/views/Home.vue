<template>
  <div
    id="background--primary"
    class="primary"
  >

    <!-- <div class="home">
      <h1 class="display-4">This is Home</h1>
    </div> -->


    <div class="d-flex flex-column">
      <div
        class="my-10"
      ></div><!-- 여백 -->

      <div 
        v-for="(item, i) in items"
        :key="i"
        class="d-flex justify-center mb-5"
      >
        <v-card
          router
          :to="item.routes"
          shaped
          :color="item.color"
          class="mx-5"
          min-height="60px"
          min-width="200px"
          width="500px"
        >
          <div
            class="d-flex justify-center"
          >
            <v-card-title class="white--text">{{ item.name }}</v-card-title>
          </div>
          
        </v-card>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    items : [
      {
        color: 'orange',
        name: '문제 풀기',
        routes: '/solve'
      },
      {
        color: 'green',
        name: '학습 현황',
        routes: '/status'
      },
      {
        color: 'light-blue',
        name: '시험 일정',
        routes: '/schedule'
      },
      {
        color: 'deep-orange',
        name: '시험 지원하기',
        routes: '/apply'
      },
    ]
  })

}
</script>

<style>
#background--primary {
  border-radius: 0px 0px 30px 30px;
  min-height: 700px;
}
</style>