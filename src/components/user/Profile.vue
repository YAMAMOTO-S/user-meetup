<template>
   <v-container>
      <v-row align="center" justify="center">
         <v-col cols="12" md="4">
            <br><br>
            <figure class="avatar">
                  <img src="https://placehold.it/128x128">
            </figure>
            <!-- <v-btn :to="{name: 'edit'}" :userProfile="user.profile">edit</v-btn> -->
         </v-col>
         <v-col cols="12" md="4" lg="4">
            <v-card-text >
               <v-card-title>name
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
                     <edit :userProfile="user.profile" />
                     </v-card>
                  </v-dialog>
               </v-card-title>

               this is a place for description.
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
<!-- 編集のdialog -->
         <!-- <v-btn
         color="primary"
         dark
         @click.stop="dialog = true"
         >
         OPEN
         </v-btn>
         <v-dialog v-model="dialog" max-width="1000">
            <v-card>
            <edit :userProfile="user.profile" />
            </v-card>
         </v-dialog> -->

         
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
     margin-left: 50px;
  }
</style>