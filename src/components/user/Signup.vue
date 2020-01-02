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

               <figure class="avatar">
                     <img src="https://placehold.it/128x128">
                  </figure>

               <form @submit.prevent="handleRegister">
                  <p class="red--text text--lighten-1 title" center v-if="form.feedback">{{ feedback }}</p>
                  <v-text-field label="Email" name="email" required 
                  v-model="form.email">
                  </v-text-field>
                  <v-text-field label="Password" name="password" required 
                  v-model="form.password">
                  </v-text-field>
                  <v-text-field label="Password Confirmation" name="passwordComfirmation" 
                  required v-model="form.passwordComfirmation">
                  </v-text-field>
                  <v-text-field label="User name" name="name" required 
                  v-model="form.name">
                  </v-text-field>
                  <v-text-field label="Avatar Url" name="avatar" required 
                  v-model="form.avatar">
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
         form: {
            email: null,
            password: null,
            passwordComfirmation: '',
            name: null,
            feedback: null,
            avatar: '',
         },
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
   // Module(auth.js)から呼び出してUser登録
      handleRegister(){
         this.$store.dispatch('auth/singUp', this.form)
            .then(() => {
               this.$router.push({ name: "login"})
               this.$toasted.show("Success !!", { 
                  theme: "toasted-primary",
                  position: "top-center", 
                  duration : 5000
               });
            }).catch(err => {
               this.$toasted.error(err, { duration: 5000,
               position: "top-center"})
            })
      },

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
   margin-top: 50px;
   margin-left: 100px;
   margin-right: 100px;
   margin-bottom: 100px;
}
.test {
   border-color: black
  }

.datetitle{
     color: #898989;
     margin-bottom: 30p
  }

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
</style>