<template>
  <v-app-bar
    app
    flat
    color="primary"
  >
    <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-toolbar-title class="display-1 white--text" @click="onClickTitle">TOEIC SPEAKING</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-if="isAuthenticated !== undefined " icon @click.prevent="onClickLogout">
      <v-icon class="white--text">fas fa-sign-out-alt</v-icon>
    </v-btn>
    <v-btn v-else icon router :to="'/login'">
      <v-icon class="white--text">fas fa-sign-in-alt</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      loginRouter : this.$store.state.accessToken,
    }
  },
  methods : {
    onClickTitle(){
      this.$router.push('/')
    },
    onClickLogout() {
      this.$store.dispatch('logout')
    }
  },
  computed : {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  created(){
    
  }
  
}
</script>