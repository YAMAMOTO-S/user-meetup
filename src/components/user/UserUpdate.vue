<template>
   <v-container>
      <v-row>

         <v-col class="mx-auto" cols="12" md="9" sm="9">
            <form @submit.prevent="">

               <h2 class="title">Change your infomation</h2>
               <br>
               <v-text-field label="Name" name="name" required v-model="userProfile.fullName">
               </v-text-field>
               <v-text-field label="Avatar" name="avatar" required v-model="userProfile.avatar">
               </v-text-field>
               <v-textarea label="Description" name="description" required v-model="userProfile.description">
               </v-textarea>

               <div class="subbtn">
                  <v-btn depressed type="submit">Change</v-btn>
               </div>

            </form>
         </v-col>

      </v-row>
   </v-container>
</template>

<script>
export default {
   props: ["userProfile"],

   data(){
      return {
      }
   },
   computed: {
      
   }
}   
</script>

<style scoped>
.title{
   color: black;
   text-align: center;
   margin: 50px;
}
.subbtn{
   text-align: center;
   margin: 20px;
}
.imagepre{
   width: auto;
}

</style>