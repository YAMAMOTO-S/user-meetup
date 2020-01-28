<template>
    <v-container fluid>
      <v-row align="center" justify="center">
         <v-col cols="12" md="12" lg="12">
            <v-img
               :src="topImage"
               aspect-ratio="1"
               class="grey lighten-2"
               max-height="500"
               >
               <v-container class="middletext">
                  <br>
               <div class="title">
                  <h1>Lets meet up</h1>
               </div>
               
               <div  class="firstbtn">
                  <v-btn color="#FC9D9D" class="white--text" to="/signup">Let's start!!</v-btn>
               </div>
               </v-container>
            </v-img>
         </v-col>
      </v-row>

      <v-row>
         <v-col cols="12" md="3" lg="3">
            <v-card md="3" lg="3">
               <v-card-title>TEST</v-card-title>
            </v-card>
         </v-col>
         <v-col cols="12" md="3" lg="3">
            <v-card md="3" lg="3">
               <v-card-title>TEST</v-card-title>
            </v-card>
         </v-col>
         <v-col cols="12" md="3" lg="3">
            <v-card md="3" lg="3">
               <v-card-title>TEST</v-card-title>
            </v-card>
         </v-col>
         <v-col cols="12" md="3" lg="3">
            <v-card md="3" lg="3">
               <v-card-title>TEST</v-card-title>
            </v-card>
         </v-col>
      </v-row>
</v-container>
      
    


</template>

<script>
export default {
   components: {
      
   },

   data(){
      return{
         topImage: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
      }
   },
   created(){
      this.$store.dispatch('bindmeetups')
   },
   computed: {
      meetups() {
         return this.$store.state.meetups
      }
   }
}
</script>

<style scoped>
.title{
   color: #EEF9FF
}
.firstbtn{
  text-align:center;
}
.middletext{
   margin: auto;
   margin-top: 80px;
}
</style>