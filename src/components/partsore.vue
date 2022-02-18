<script setup lang="ts">
import { ref } from 'vue';
import {QuranData} from '../quran-metadata'
import { useRoute , useRouter } from "vue-router";
import { QuranPage } from '../quran-page'
import { textQuran } from '../ayeha';



const router = useRouter();
function gotoSura(suraNumber: number) {
    var finalPage
    let ayaIndexInSura = QuranData[suraNumber][0]
    
     for (let i = 0; i < QuranPage.length; i++) {
         let ayaIndexInPage = QuranPage[i]
         
         if (ayaIndexInSura == ayaIndexInPage) {
             finalPage = i
             break;
           
         }
         
        
         if (ayaIndexInPage > ayaIndexInSura) {
             finalPage = i - 1
             break;
             
         }
         
     }
   
    
    router.push('/insidesore/' + finalPage + 1);
   
   
   return ;
  
   
}
   
   
//    for (const item in QuranPage ) {
       
//           if(QuranPage[item][0]==suraNumber){
       
//          for(const nom in textQuran ){
//              textQuran.slice()
//    }
   






</script>
<template>

<div class="container">
 
<div @click="gotoSura(i)"  class="mother" v-for="(item,i) in QuranData" :key="item[0]">

<div> {{item[5]}} </div>
<div class="under"> {{item[7]}}    </div>
  
</div>
</div>
</template>
<style>

.mother{
    width: 280px;
    height: 130px;
    border: 1px solid blue;
    justify-content: center;
    margin: 20px;
    border-radius: 20px;
    display: grid;
    grid-template-columns:  100%;
    grid-template-rows: 90% 10%;
    align-items: center;
    background-color: coral;
    padding: 20px;
}
.under{
    float: left;
    text-align: left;
}
.container{
     display: grid;
     grid-template-columns: auto auto auto auto;
     text-align: center;
     justify-content: center
}
</style>

