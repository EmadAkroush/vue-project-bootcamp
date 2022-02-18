<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import partsore from './components/partsore.vue'
import '../src/main.ts'
import { useRouter , useRoute } from 'vue-router'



const router = useRouter();
const route = useRoute()

function click() {

  router.push({ name: 'inside'});
 
}
 

</script>

<template>

  
<router-view></router-view>
</template>

<style>
#app{
 
}
</style>
