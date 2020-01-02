<template>

   <v-row align="center" justify="center">
      <v-col cols="12" md="12" >
         <v-img
            src="https://images.unsplash.com/photo-1450609283058-0ec52fa7eac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            aspect-ratio="1"
            class="grey lighten-2"
            max-height="500">
            <v-container class="middletext">
               <div  class="title">
               <h1 class="font-weight-black" color="#EEF9FF">Let's meet up !!</h1>
            </div>
            <div  class="firstbtn">
               <v-btn color="#FC9D9D" class="white--text" to="/meetups">CLICK HERE !!</v-btn>
            </div>
            </v-container>
         </v-img>
      </v-col>
    </v-row>
<!-- ここからMeetup一覧 -->
      <!-- <v-col  md="4">
         <div v-for="meetup in meetups" :key="meetup.id">
            <h2>{{ meetup.title }}</h2>
            <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="meetup.image"
               >
               </v-img>
         </div>
      </v-col> -->

      
    


</template>

<script>
export default {
   components: {
      
   },

   data(){
      return{
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

<style>
.title{
   text-align: center;
   color: aliceblue;
   margin: 100px;
   font-size: 300px;
}
.firstbtn{
  text-align:center;
}
.middletext{
   margin: auto;
   margin-top: 40px;
}
</style>