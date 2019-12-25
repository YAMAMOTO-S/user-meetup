<template>
   <v-container>
      <v-row>
         <v-card v-for="meetup in meetups" :key="meetup.id">
                  <v-card-title>{{ meetup.title }}</v-card-title>
                  <h2>test</h2>
            </v-card>
      </v-row>
   </v-container>
</template>

<script>

export default {
   created(){
      this.$store.dispatch('getMeetups')
   },
   computed: {
      meetups() {
         return this.$store.state.meetups
      }
   }
}
</script>

<style>

</style>