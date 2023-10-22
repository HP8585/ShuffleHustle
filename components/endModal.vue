<template>
<div   class="absolute z-[30] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cyan-600 rounded text-white flex flex-col
 gap-1 justify-between items-center px-6 py-4">
    <div class="text-center mb-8">
    <h1 class="text-xl font-semibold ">{{ userData().scores > 50 &&  userData().scores < 100 ? "Ooh, your score is not that illuminant ☹️!":userData().scores > 100 && userData().scores < 200 ?
     "That wasn't that bad, You still could have done better 😃" : userData().scores > 200 && userData().scores < 400 ? "You're doing nice 🙃" : userData().scores > 400 && userData().scores < 500 ?
    "You're made for this game fella 🤩" : userData().scores > 500 ? "Winner winner chicken dinner 🥳🎉" : "Game Over~ !" }}</h1>
    
    <span>Your Score : {{ userData().scores }}</span>
</div>

    <div class="flex flex-col items-center justify-center gap-2">
        <h2 >Do you wanna try again? 😉</h2>
        <button @click="$emit('restart')" class="bg-white text-cyan-600 font-semibold px-2 py-1 rounded hover:bg-gray-200 duration-100">
            Play Again</button>
    </div>
</div>
</template>

<script setup>
import { userData } from '~/stores/user2'
</script>