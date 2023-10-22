                                                                    <!--God-->
<template>
    <div
      class="duration-100 z-40 fixed bottom-0 left-0 w-full flex flex-col items-center h[20em] right-0 bg-white shadow-2xl rounded-t-lg p-4"
      style="box-shadow: 0 5px 20px black;"
      
      :style="`height: ${sheetHeight}px; transform: translateY(${sheetOffset}px)`"
      @mousedown.prevent="startDrag"
      @mousemove.prevent="drag"
      @mouseup.prevent="stopDrag"
      @mouseenter="stopDrag"
      @touchstart.prevent="startDrag"
      @touchmove="drag"
      @touchend="stopDrag"
    >
    <div  class="bg-gray-700 hover:cursor-pointer active:cursor-grab rounded w-12 h-1.5 mb-5" />
      <!-- Content of the bottom sheet -->
      <h1 class="font-bold text-lg mb-3">Do you know the rules?</h1>
        <button class="mb-10 bg-cyan-600 px-2 py-1 text-white rounded hover:bg-cyan-700 duration-200"
        :class="sheetOffset < 420 ? 'hidden': ''" @click="$emit('confirm')" @pointerup="$emit('confirm')"
        >Yes, I do!</button>
      <div class="content">
      <div>
        <span >1. Hokm :</span>
        <p>Hokm is the principal symbol of the round, if a symbol gets determined as Hokm in a round , it means if a common symbol matches with the Hokm symbol of the round
            you'll receive +15 scores for the common one and +30 for the Hokm symbol and the total will be reckoned +45 scores
        </p>
      </div>

      <div>
        <span >2. Common symbols :</span>
        <p>All symbols except the one which is set as the Hokm of the round are denoted to as Common symbols. By matching two common symbols you will receive +15 scores 
            which has a total of +30 scores!
        </p>
      </div>

      <div>
        <span >3. Timer :</span>
        <p>The Hokm symbol will automatically be set by the system in less than 6 seconds and afterwards you'll be able to begin playing !
            There is also another timer bar whereby the round ends and you'll have your final score
        </p>
      </div>

      <button class="mb-10 bg-cyan-600 px-2 py-1 text-white rounded hover:bg-cyan-700 duration-200"
        :class="sheetOffset >= 420 ? 'hidden': ''" @click="$emit('confirm')" @pointerup="$emit('confirm')"
        >Got it!</button>
    </div>
    </div>
  </template>
  
  <script setup>

  const sheetHeight = ref(600);
  const sheetOffset = ref(450);
  const dragData = reactive({
    isDragging: false,
    startY: 0,
    startOffset: 0,
  });
  
  function startDrag(event) {
    dragData.isDragging = true;
    dragData.startY = event.clientY || event.touches[0].clientY;
    dragData.startOffset = sheetOffset.value;
  }
  function drag(event) {
    if (dragData.isDragging) {
      const clientY = event.clientY || event.touches[0].clientY;
    const deltaY = clientY - dragData.startY;
      sheetOffset.value = dragData.startOffset + deltaY;

      const newOffset = dragData.startOffset + deltaY;
if (newOffset <= 0) {
  sheetOffset.value = 0;
  dragData.isDragging = false;
  stopDrag();
} else {
  sheetOffset.value = newOffset;
}
    }
  }

  function stopDrag() {
    dragData.isDragging = false;
  }
  </script>