<template>
  <v-app>
    <div class="App">

<!-- 認証されている場合 -->
    <v-toolbar class="elevation-0" extended extension-height="" prominent color="blue lighten-3">
          <div>
            <h1 class="test">User-Meetup</h1>
            <p v-if="isAuthenticated">{{user.email}}</p>
          </div>
          <v-spacer></v-spacer>
          
          <v-toolbar-items>
            <v-btn text to="/" color="#EEF9FF">HOME</v-btn>
            <v-btn text to="/meetups" color="#EEF9FF">MEETUPS</v-btn>
            <v-btn text to="/create" color="#EEF9FF" v-if="isAuthenticated">Create</v-btn>
            <v-btn text to="/chat" color="#EEF9FF" v-if="isAuthenticated">chat</v-btn>
            <v-btn text to="/Profile" color="#EEF9FF" v-if="isAuthenticated">Profile</v-btn>
            <v-btn text to="/signup" color="#EEF9FF" v-if="!isAuthenticated">signup</v-btn>
            <v-btn text to="/login" color="#EEF9FF" v-if="!isAuthenticated">login</v-btn>
            <v-btn text @click="$store.dispatch('auth/singOut')" color="#EEF9FF" v-if="isAuthenticated">LOGOUT</v-btn>
          </v-toolbar-items>
    </v-toolbar>
       
    <main>
      <router-view></router-view>
    </main>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      menuItems: [
        {title: 'Home', link: '/'},
        { icon: 'mdi-face', title: 'Meetups', link: '/meetups'},
        { icon: 'mdi-account-box-multiple', title: 'create', link: '/create'},
        {title: 'chat', link:'/chat'},
        { icon: 'mdi-account-badge-horizontal-outline', title: 'Profile', link: '/profile'},
        { icon: 'mdi-emoticon-neutral-outline', title: 'Sign up', link: '/signup'},
        { icon: 'mdi-account-card-details-outline', title: 'Login', link: '/login'},
      ],
      homelink: '/'
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
   isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    }
  }
};
</script>

<style>
.test{
  margin-top: 17%;
  margin-left: 50px;
  color: #EEF9FF
}
v-toolbar{
  color: #AAD6EC
}

</style>
