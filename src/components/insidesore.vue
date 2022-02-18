<script setup  lang="ts">
import { useRouter , useRoute } from 'vue-router'
import { QuranPage } from '../quran-page'
import { textQuran } from '../ayeha';
import { computed, reactive, ref, watch } from 'vue';



const route = useRoute();

const pageAyat = computed(()=>{
const pagenumber = +route.params.finalPage
const startindex = QuranPage[ pagenumber - 1]
const endintex = QuranPage[ pagenumber ]
return textQuran.slice( startindex  , endintex  )
})



     var arry=[]
     for(var i=ref(1);i.value<=pageAyat.value.length;i.value++){
         
        var aya = `http://www.everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/00100${i.value}.mp3`
        arry.push(aya)
           }
           console.log(arry)

      
        
     


</script>

<template>
     <div class="body">
      <div>
     <div class="inside" v-for="item in pageAyat">

      {{item}}
 

     </div>
       </div>

    <div>
     <div class="inside-voice" v-for="item in arry">
      <audio controls>
      <source :src="item" type="audio/ogg">
      Your browser does not support the audio tag.
     </audio>
     </div>
     </div>
     </div>


    

      <div class="control-page">
     <router-link class="button" :to="'/insidesore/'+(+route.params.finalPage + 1)">next</router-link>
     <router-link class="button" :to="'/insidesore/'+(+route.params.finalPage - 1)">pervious</router-link>
     </div>
</template>

<style>
.inside{
      width: 600px;
      height: 60px;
      text-align: right;
      margin: 0 auto;
      
}
.body{
      display: grid;
      grid-template-columns: 50% 50%;
      padding: 20px;
      border: 1px solid orange;
      border-radius: 10px;
      }
.inside-voice{
       width: 600px;
      height: 60px;
      text-align: right;
      margin: 0 auto;
}
.control-page{
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 20px;
      width: 200px;
      margin: 0 auto;
      padding: 20px;
      justify-content: center;
}
.button{
   background-color: peru;
   width: 70px;
   height: 30px;
   text-align: center;
   border-radius: 10px;
   color: white;
   text-decoration: none;
}
</style>