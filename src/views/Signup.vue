<template>
 <div class="about">
 <h1>This is an Signup page</h1>
 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 <form>
 <div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
 <input type="email" v-model="username" class="form-control"
id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter
email" />
 <small id="emailHelp" class="form-text text-muted" >We'll
never share your email with anyone else.</small>
 </div>
 <div class="form-group">
 <input type="password"  v-model="password" class="form-control"
id="exampleInputPassword1" placeholder="Password" />
<label for="exampleInputPassword1">Password</label>
 </div>
 <div class="form-group">
 <input type="password" v-model="passwordRepeat" class="form-control"
id="exampleInputPassword1" placeholder="Password" />
<label for="exampleInputPassword1">Repeat Password</label>
 </div>
 <button type="button" @click="signup" class="btn btn-primary">Submit</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
</template>
<script>
import { firebase } from "@/firebase.js";
export default {
    name:'Signup',
    data() {
        return {
            username: " ",
            password: " ",
            passwordRepeat: " ",
        
        };
    },

    methods: {
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(
             function(){
                 console.log("Uspješna registracija");
             })
            .catch(function(error){
              console.error("Došlo je do pogreške",error)
            });


            console.log("Nastavak");
        },
    }, 
};
</script>
