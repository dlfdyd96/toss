<template>
  <div
    id="background--primary"
    class="primary d-flex flex-column"
  >
    <v-spacer></v-spacer>
    <div class="d-flex justify-center">
      <v-card
        height="450px"
        
        min-width="300"
        max-width="95%"
      >
        <v-card-title class="display-1 mt-4 grey--text">로그인</v-card-title>
        <v-text-field v-model="email" outlined class="mx-4 pt-5" label="아이디"></v-text-field> 
        <v-text-field v-model="password" outlined class="mx-4" label="비밀번호" type="password"></v-text-field> 
        <div class="d-flex justify-end mr-4">              
          <v-btn @click="onLogin(email, password)" text depressed>Sing In</v-btn>
          <v-btn @click="onLogin(email, password)" text>Login</v-btn>
        </div>
        <p><i>{{ msg }}</i></p>
      </v-card>
    </div>
    <v-spacer></v-spacer>

    
  </div>
</template>


<script>
export default {
    data : () => ({
      email: '',
      password: '',
      msg: ''
    }),
    methods : {
      onLogin(email, password) {
        this.$store.dispatch('login', {email, password})
        .then(() => this.redirect())
        .catch(({message}) => this.msg = message)
      },
      redirect() {
        const {search} = window.location
        if (search==='') {
          this.$router.push('/')
        } else {
          const tokens = search.replace(/^\?/, '').split('&')
          const {returnPath} = tokens.reduce((qs, tkn) => {
            const pair = tkn.split('=')
            qs[pair[0]] = decodeURIComponent(pair[1])
            return qs
          }, {})
          this.$router.push(returnPath)
        }
      }
    }
}
</script>


<style scoped>
#background--primary {
  border-radius: 0px 0px 15px 15px;
  min-height: 100%;
}

#login__block {
  opacity: 0.25;
}
</style>