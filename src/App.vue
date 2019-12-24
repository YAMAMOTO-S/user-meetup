<template>
  <v-app>
    <div class="App">
      <v-toolbar>
      
      <v-toolbar-title>Title</v-toolbar-title>
      <v-toolbar-title>

      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in menuItems" :key="item.title">
        <v-btn text :to='item.link'>{{ item.title }}</v-btn>
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

  components: {
   
  },

  data(){
    return{
      menuItems: [
        { icon: 'mdi-face', title: 'Meetups', link: '/meetups'},
        { icon: 'mdi-account-box-multiple', title: 'create', link: '/create'},
        {title: 'chat', link:'/chat'},
        { icon: 'mdi-account-badge-horizontal-outline', title: 'Profile', link: '/profile'},
        { icon: 'mdi-emoticon-neutral-outline', title: 'Sign up', link: '/signup'},
        { icon: 'mdi-account-card-details-outline', title: 'Sign in', link: '/signin'}
      ]
    }
  }
};
</script>
