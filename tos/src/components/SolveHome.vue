<template>
  <div class="d-flex flex-column">
    <div 
      v-for="(item, i) in items"
      :key="i"
      class="d-flex justify-center">
        <v-card
          router
          :to="item.routes"
          class="light-blue white--text my-3"
          flat
          min-width="95%"
          max-width="95%"
          min-height="100px"
        >
          <div class="d-flex flex-column">

              <div class="d-flex justify-end"> 
                  <div>
                      <v-card-title class="mr-3 pb-0">{{ item.title }}</v-card-title>
                  </div>
              </div>
              <div class="d-flex justify-end"> 
                  <div>
                      <v-card-text class="mr-3 pt-1">{{ item.subtitle }}</v-card-text>
                  </div>
              </div>

          </div>
        </v-card>
    </div>

  </div>
</template>

<script>
export default {
    data : () => ({
        items : [
            {
                title: 'Part1',
                icon : '',
                subtitle: 'Read a text aloud',
                routes : '/solve/part1'
            },
            {
                title: 'Part2',
                icon : '',
                subtitle: 'Describe a picture',
                routes : '/solve/part2'
            },
            {
                title: 'Part3',
                icon : '',
                subtitle: 'Respond to quetions',
                routes : '/solve/part3'
            },
            {
                title: 'Part4',
                icon : '',
                subtitle: 'Respond to quetions using information provided',
                routes : '/solve/part4'
            },
            {
                title: 'Part5',
                icon : '',
                subtitle: 'Propose a solution',
                routes : '/solve/part5'
            },
            {
                title: 'Part6',
                icon : '',
                subtitle: 'Express an opinion',
                routes : '/solve/part6'
            },
        ]
    })
}
</script>

<style>

</style>