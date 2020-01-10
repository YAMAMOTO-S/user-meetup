<template>
   <v-container>
      <v-row align="center" justify="center">
         <v-col cols="12" md="4">
            <br><br>
            <figure class="avatar">
                  <img :src="user.profile.avatar">
                  <!-- https://placehold.it/128x128 -->
            </figure>
         </v-col>
         <v-col cols="12" md="6" lg="6">
            <v-card-text >
               <v-card-title>{{user.profile.fullName}}
                  <v-btn
                     color="#AAD6EC"
                     depressed
                     small
                     @click.stop="dialog = true"
                     class="editbtn"
                  >
                  edit
                  </v-btn>
                  <v-dialog v-model="dialog" max-width="1000">
                     <v-card>
                     <!-- UserUpdate.vueを表示 -->
                     <edit 
                        :userProfile="user.profile" 
                        :onModalSubmit="updateProfile"/>
                     </v-card>
                  </v-dialog>
               </v-card-title>
               <v-card-text class="text--primary" style="white-space:pre-wrap; word-wrap:break-word;">
                  <div>{{ user.profile.description }}</div>
               </v-card-text>
            </v-card-text>
         </v-col>
      </v-row>
      <br><br>

      <v-row>
         <v-col cols="12" lg="4" md="4" xs="12">
            <v-card>
               <v-card-title>Meetup</v-card-title>
               
            </v-card>
         </v-col>

         <v-col cols="12" lg="4" md="4" xs="12">
            <v-card>
               <v-card-title>Meetup</v-card-title>
               
            </v-card>
         </v-col>

         <v-col cols="12" lg="4" md="4" xs="12">
            <v-card>
               <v-card-title>Meetup</v-card-title>
               
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import edit from '@/components/user/UserUpdate.vue'

export default {
   computed: {
      user(){
         return this.$store.state.auth.user
      }
   },
   components: {
      edit
   },
   data(){
      return {
         dialog: false,
      }
   },
   methods: {
      updateProfile(profile){
         // updateInfoを持ってくる
         this.$store.dispatch('auth/updateInfo', profile)
            .then(() => {
               this.dialog = false
               this.$toasted.show("Success!!", { 
                     theme: "toasted-primary",
                     position: "top-center", 
                     duration : 5000
                  });
            })
      }
   }
}
</script>

<style scoped>
  .avatar {
    text-align: center;
  }
  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  .editbtn{
     margin-left: 20px;
  }
</style>