<template>
 <div class="row">
 <div class="col-8">
<InstagramCard v-for="card in cards" :key="card" :info="card"/>      <!--direktiva vue for petlja(vrijednosti koje ce se ponavljati)-->
 <!--key atribut koji je u js, mora ici :key ako je v-fpor petlja-->

</div>
 <div class="col-4">


 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue'

let cards = []

//...API/firebase -> sve kartice -> cards

cards = [

"https://picsum.photos/id/1/400/400",
"https://picsum.photos/id/2/400/400",
"https://picsum.photos/id/3/400/400"

]



export default {                //uputa za vue.js kako oblikovati template(tu komponentnu)
  name: 'Home',
  data: function(){
    return{
      //..Kljucevi vrijednosti
      cards: cards,
    }
  },
  components: {
    InstagramCard,
  }
}
</script>



  