<template>
   <v-container>
      <v-row>
         <v-col>
            <v-card class="mx-auto mb-7" max-width="800">
               <v-img
                  height="200px"
                  :src="imageUrl"
                  >
               </v-img>
               <h2 class="title">Signup</h2>

               <form @submit.prevent="signup">
                  <p class="red--text text--lighten-1 title" center v-if="feedback">{{ feedback }}</p>
                  <v-text-field label="Email">
                  </v-text-field>
                  <v-text-field label="Password">
                  </v-text-field>
                  <v-text-field label="User name">
                  </v-text-field>
                  
                  <!-- 全て入れないとボタンが浮き出ないようにしている。 -->
                  <div class="subbtn">
                     <v-btn :disabled="!formIsValid" type="submit">Create</v-btn>
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
         email: null,
         password: null,
         name: null,
         feedback: null,
         imageUrl: 'https://image.freepik.com/free-vector/social-media-refer-friend-concept_23-2148260460.jpg',
      }
   },
   computed: {
      formIsValid(){
         // 全て埋めないと浮き出ない用になっている
         return this.email !== '' 
         && this.password !== ''  && this.name !== ''
      }
   },
   methods: {
   // User登録
   
   }
}
</script>

<style>
.title{
   color: black;
   text-align: center;
   margin: 50px;
}
.subbtn{
   text-align: center;
   padding-bottom: 50px;
}

form {
   margin: 100px;
}
.test {
   border-color: black
  }

.datetitle{
     color: #898989;
     margin-bottom: 30px
  }
</style>