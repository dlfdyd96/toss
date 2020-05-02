<template>
  <v-app>
    <appbar></appbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <myfooter></myfooter>

  </v-app>
</template>

<script>
import Appbar from './components/Appbar';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    appbar: Appbar,
    myfooter: Footer,
  },

  data: () => ({
    //
  }),
};
</script>
