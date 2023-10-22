<template>
  <end-modal @restart="$emit('restart')" v-show="userData().endModal" />
    <ul class="grid grid-cols-7 px-2 md:grid-cols-13 gap-1 overflow-hidden w-[23em] md:w-[75.5em] h[30em] bg-red500 ">
            <li :class="card.isTurned ? 'transform skew-y-[190deg] duration-300' : ''" @click="flipCard(card)" v-for="(card, index) in cardsData" :key="index">
                <div v-show="card.won" class="absolute z-20 top-[-0.1em] right-[0em] bg-cyan-600 text-white md:text-[0.9rem] text-[0.5rem] px-0.5 md:px-1 py-0.5 rounded-full">
                    {{ card.hokm ? '+30' : '+15' }}
                </div>
                <!-- front -->
              <div v-if="card.matched" class="first relative">
                <img v-if="card?.img" :src="card?.img" class="h-full w-full" draggable="false">
              <!-- <div v-else class="sec">
              </div> -->
              </div>
      
              <!-- back -->
              <div v-else class="back "   style="transform-style: preserve-3d;">
                <img src="../assets/pics/back.jpg" draggable="false">
              </div>
            </li>
        </ul>
    </template>
    
    <script setup>
    import { userData } from '~/stores/user2'

import { coreGame2 } from "~/composables/game";

    
    const { shuffledCards, flipCard, cardsData } = coreGame2()
    onMounted(() => {
        cardsData.value = shuffledCards.value
    });


    </script>