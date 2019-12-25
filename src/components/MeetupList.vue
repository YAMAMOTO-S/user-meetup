<template>
   <v-container>
      <v-row>
         <v-col>
            <v-card v-for="meetup in meetups" :key="meetup.id">
                  <v-card-title>{{ meetup.title }}</v-card-title>
                  <h2>test</h2>
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>