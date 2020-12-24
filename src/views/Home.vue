<template>
 <div class="row">
 <div class="col-8">
<InstagramCard v-for="card in filteredCards" :key="card.url" :info="card"/>      <!--direktiva vue for petlja(vrijednosti koje ce se ponavljati)-->
 <!--key atribut koji je u js, mora ici :key ako je v-fpor petlja-->

</div>
 <div class="col-4">


 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue';
import store from "@/store.js"

let cards = []

//...API/firebase -> sve kartice -> cards

cards = [

{url: "https://picsum.photos/id/1/400/400",description:'laptop', time:'few minutes ago...'},
{url: "https://picsum.photos/id/2/400/400",description:'laptop #2', time:'hour ago...'},
{url: "https://picsum.photos/id/3/400/400",description:'laptop #3', time:'few hours ago...'},

]



export default {                //uputa za vue.js kako oblikovati template(tu komponentnu)
  name: 'Home',
  data: function(){
    return{
      //..Kljucevi vrijednosti
      cards: cards,
      store,
    }
  },
  computed: {    //objekt je za razliku od funckije data
   filteredCards(){    //unutra stavljamo funkcije
     //logika koja filtrira cards...pokazivac this
     let termin = this.store.searchTerm;

     return this.cards.filter(card => card.description.includes(termin));
  /*
   ovaj dio koda u liniji koda 48 je zamjena za ovaj komentirani dio koda ispod(skraceni oblik)
     let newCards = [];

     for(let card of this.cards){
       if (card.description.indexOf(termin) >= 0){
           newCards.push(card);
       }
       }
     return newCards;
*/ 

   }
  },
  components: {
    InstagramCard,
  }
}
</script>



  