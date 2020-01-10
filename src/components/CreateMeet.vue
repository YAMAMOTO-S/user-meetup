<template>
   <v-container>
      <v-row align="center" justify="center">
         <v-col cols="12" md="10" lg="5" xs="12">
            <v-card>
               <v-img
                  height="200px"
                  :src="topImage"
                  >
               </v-img>
               <h2 class="title">Create Meetup</h2>

               <form @submit.prevent="">
                  <p class="red--text text--lighten-1 title" center ></p>
                  <v-text-field label="Title" name="title" required 
                  >
                  </v-text-field>
                  <v-text-field label="Country" name="country" required 
                  >
                  </v-text-field>
                  <v-text-field label="City" name="city" required 
                  >
                  </v-text-field>
                  <v-text-field label="ImageUrl" name="imageUrl" required 
                  >
                  </v-text-field>
                  <v-textarea label="Description"
                   name="description">
                  </v-textarea>

                  <div>
                     <p class="datetitle">Choose a Data you want</p>
                     <v-date-picker v-model="date" color="blue-grey lighten-3" full-width>
                        <p>{{ date }}</p>
                     </v-date-picker>
                  </div>
                  <br><br>
                  <div class="subbtn">
                     <v-btn type="submit">Create</v-btn>
                  </div>
               </form>
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
export default {
   data(){
      return {
         topImage: 'https://image.freepik.com/free-vector/group-people-working-together_52683-28615.jpg',
         title: null,
         country: null,
         city: null,
         description: null,
         date: null,
         imageUrl: null,
      }
   }
}
</script>