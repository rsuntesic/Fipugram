<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <!-- Image and text -->
  <a class="navbar-brand" href="#">
    <img src="@/assets/fipu_logo.png" 
    height="40" 
    class="d-inline-block align-top"
     alt="" loading="lazy">
  </a>
  <!-- pitati za button nesto ne radi -->
   <button  
   class="navbar-toggler"
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarToggler" 
    aria-controls="navbarToggler" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarToggler">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link> 
      </li>
      <li class="nav-item">
       <router-link to="/login" class="nav-link">Login</router-link> 
      </li>
      <li class="nav-item">
        <router-link to="/signup" class="nav-link">Sign up</router-link>
      </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
      <input v-model="store.searchTerm"  class="form-control mr-sm-2" type="search" placeholder="Pretraga" aria-label="Search" />
    </form>
  </div>
    </nav>



    <div class = "container">
    <router-view/>
    <!-- tu ruter dinamicki ubaci screen -->
    </div>

  </div>
</template>

<script>
import store from "@/store.js";

export default {
  name: 'app',
  data(){    //funkcija
   return {    //objekt 
     store: store,
   }

  }
}

</script>



<style lang="scss">
 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
