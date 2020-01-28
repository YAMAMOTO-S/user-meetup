<template>
   <v-container>
      <v-row>
         <v-col>
            <v-card class="mx-auto" max-width="600px">
               <v-card-text>

                  <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="meetup.imageUrl"
                  >
                  </v-img>
                  <br>
                  <v-list>
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title>
                 <v-icon>mdi-map-marker</v-icon>
                  {{meetup.city}}, {{meetup.country}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="white-space:pre-wrap; word-wrap:break-word;">
                 <v-icon>mdi-file-document</v-icon>   
                 {{meetup.description}}
               </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider ></v-divider>

          <v-list-item >
            <v-list-item-content>
              <v-list-item-title><v-icon>mdi-clock-outline</v-icon>  {{meetup.date}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item >
            <v-list-item-content>
              <v-list-item-title><v-icon>mdi-account</v-icon> {{meetup.profile.fullName}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
                 
         </v-card-text>
         <v-card-actions>       
            <v-btn depressed :to="{ name: 'Meetups'}">
               Back
            </v-btn>
         </v-card-actions>

            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>

export default {
   data(){
      return {
        
      }
   },
   computed: {
      meetup() {
         return this.$store.state.meetup
      },
   },
   created(){
      const { id } = this.$route.params
      this.$store.dispatch('getMeetup', id)
   },
   methods: {
      
   }

}
</script>

<style>

</style>