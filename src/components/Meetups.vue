<template>
  <v-container>
         <v-row>
        <v-col>
            <v-card
               class="mx-auto mb-7"
               max-width="800"
               v-for="meetup in meetups" :key="meetup.id"
            >
               <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="meetup.imageUrl"
               >
                  <v-card-title>{{ meetup.title }}</v-card-title>
               </v-img>

               <v-list>
                  <v-list-item >
                     <v-list-item-action>
                     <v-icon>mdi-map-marker</v-icon>
                     </v-list-item-action>
                     <v-list-item-content>
                     <v-list-item-title>{{meetup.city}}, {{meetup.country}}</v-list-item-title>
                     </v-list-item-content>
                  </v-list-item>

                     <v-divider inset></v-divider>

                  <v-list-item>
                     <v-list-item-action>
                     <v-icon>mdi-file-document</v-icon>
                     </v-list-item-action>
                     <v-list-item-content>
                     <v-list-item-title style="white-space:pre-wrap; word-wrap:break-word;">
                        {{meetup.description}}
                        </v-list-item-title>
                     </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>

                  <v-list-item >
                     <v-list-item-action>
                     <v-icon>mdi-clock-outline</v-icon>
                     </v-list-item-action>
                     <v-list-item-content>
                     <v-list-item-title>{{meetup.date}}</v-list-item-title>
                     </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  
               </v-list>

               <v-card-actions>
                  <!-- 個別のページに行く -->
                  <v-btn depressed :to="{ name: 'MeetupDetail', params: {id: meetup.id}}">
                     View Detail
                  </v-btn>
                  
                  <!-- <v-btn depressed @click="deleteMeetup(meetup.id)">
                     <v-icon>mdi-delete</v-icon>
                  </v-btn> -->
                  <!-- 編集 -->
                  <!-- <v-btn depressed :to="{ name: 'EditMeetup', params: {meetup_slug: meetup.slug}}">
                     <v-icon>mdi-pencil</v-icon>
                  </v-btn> --> -->
                  
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
  </v-container>
</template>

<script>

export default {
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

</style>