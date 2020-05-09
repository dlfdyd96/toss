<template>
  <div
    id="background--primary"
    class="primary"
  >
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
    data : () => ({

    })
}
</script>

<style scoped>

#background--primary {
  border-radius: 0px 0px 0px 0px;
  min-height: 700px;
}
</style>