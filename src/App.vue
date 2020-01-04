<template>
  <v-app>
    <div class="App">

    <v-toolbar class="elevation-0" extended extension-height="" prominent color="blue lighten-3">
          <div>
            <h1 class="test">User-Meetup</h1>
          </div>
            <!-- <v-btn text>User-Meetup</v-btn> -->
          <v-spacer></v-spacer>
<!-- ユーザーが認証されていない場合 -->
          <v-toolbar-items v-for="item in menuItems" :key="item.title">
            <v-btn text :to='item.link' color="#EEF9FF">{{ item.title }}</v-btn>
          </v-toolbar-items>
<!-- ユーザーが認証済みの場合 -->
          <div v-if="isAuthenticated">
            <v-toolbar-items>{{user.email}}</v-toolbar-items>
            <v-toolbar-items v-for="item in menuItems" :key="item.title">
              <v-btn text :to='item.link' color="#EEF9FF">{{ item.title }}</v-btn>
            </v-toolbar-items>
          </div>
          
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
        { icon: 'mdi-face', title: 'Meetups', link: '/meetups'},
        { icon: 'mdi-account-box-multiple', title: 'create', link: '/create'},
        {title: 'chat', link:'/chat'},
        { icon: 'mdi-account-badge-horizontal-outline', title: 'Profile', link: '/profile'},
        { icon: 'mdi-emoticon-neutral-outline', title: 'Sign up', link: '/signup'},
        { icon: 'mdi-account-card-details-outline', title: 'Login', link: '/login'}
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
