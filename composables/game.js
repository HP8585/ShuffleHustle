import { userData } from '~/stores/user2'
import { storeToRefs } from 'pinia'
export const coreGame2 = ()=>{
    const { cardsData, scores } = storeToRefs(userData())

    const userStore = userData()

    const shuffledCards = computed(() => {
        const cardsCopy = [...cardsData.value];
        for (let i = cardsCopy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
        }
        return cardsCopy;
      });
      
      const flippedCards = ref([]);
      
      const flipCard = (card) => {
        if(card.matched === true || card.isTurned === true){
          return;
        }else{
        card.isTurned = true;
        setTimeout(() => {
          card.isTurned = false;
        }, 200);
        }
        
        if (flippedCards.value.length < 2 && !card.matched) {
          flippedCards.value.push(card);
          setTimeout(() => {
            card.matched = true;
            card.isTurned = false
          }, 200);
          
          if(flippedCards.value.length === 2){
            const [card1, card2] = flippedCards.value;
      
            if(card1.value === card2.value){
                card1.won = true; card2.won = true

              flippedCards.value = []
              if(card1.hokm || card2.hokm){
                scores.value += 45
              }else{
                scores.value += 30
              }
              
            }else{
              setTimeout(() => {
                card1.matched = false
                card2.matched = false
              }, 1000);
          }}
        } else {
          flippedCards.value = [];
          card.matched = false;
        } 
      }
      return{
        shuffledCards,
        flipCard,
        cardsData,
        flippedCards
        // onSymbol,
        // setHokm
      }
}