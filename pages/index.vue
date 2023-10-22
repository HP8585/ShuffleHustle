<template>
  
    <div class=" w-screen px-4 md:px-0 overflo-hidden mdoverflow-auto md:w-fit mx-auto py20 pb-[23em] pt-[3em] h-[30em]">
      
      <div class="flex flex-col">
        
        <div class="w-full h-4 bg-white shadow rounded overflow-hidden">
        <div class="h-full bg-cyan600" :class="{'bg-cyan-600': tillEnd > 60, 'bg-yellow-500': tillEnd < 60, 'bg-red-600': tillEnd < 30}" :style="`width: ${tillEnd}%`" />
      </div>
      
      <div class="w-fit mx-auto pt-4">
  <span class="font-semibold">Hokm :</span>
  <img :src="onSymbol?.img" class="w-12">
 </div>

        <div class="flex gap-2 w-full justify-end my-2">
          <span>Score :</span>
          <span>{{ scores }}</span>
        </div>
      </div>
      <div class="relative w-full">
        <div v-show="isOverlay" class="absolute z-20 h-full w-full bg-cyan-500 bg-opacity-40 flex items-center justify-center">
        <span class="text-white text-[7rem] " style="text-shadow: 0 0 7px black;">{{ timer }}</span>
        </div>
      <cards2 @restart="startGame" />
      
     <bottom-sheet @confirm="startGame" v-show="onBottomSheet"/>
      
    </div>
    
    
    </div>
    
  </template>

<script setup>
import { userData } from '~/stores/user2'
import { storeToRefs } from 'pinia'
const { scores, isOverlay, endModal, onBottomSheet } = storeToRefs(userData())
const { settHokm, onSymbol } = getHokm()

const timer = ref(6)
const tillEnd = ref(100)

const endGame = ()=>{
  tillEnd.value = 100
  const endInterval = setInterval(() => {
    tillEnd.value--;
    if(tillEnd.value === 0){
    
    clearInterval(endInterval)
    userData().endModal = true;
    isOverlay.value = true
  }
  }, 2000);
}

onMounted(()=>{
  onBottomSheet.value = true
  isOverlay.value = true
  alert('This game is all made by HP (Hussain Panahy)!')
})

const { shuffledCards, cardsData } = coreGame2()
const startGame = ()=>{
        cardsData.value = shuffledCards.value
  cardsData.value.map(item=>{
    item.matched = false,
    item.won = false
  })
  scores.value = 0
  userData().onBottomSheet = false
  isOverlay.value = true
  settHokm()
  tillEnd.value = 100
  endModal.value = false
  isOverlay.value = true
  
  timer.value = 6
  
  const timerInterval = setInterval(() => {
  timer.value--;

  if(timer.value <= 0){
    isOverlay.value = false
    clearInterval(timerInterval)
    endGame()
  }}, 1000)

}

</script>