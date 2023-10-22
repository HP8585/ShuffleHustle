import { userData } from '~/stores/user2'
import { storeToRefs } from 'pinia'
export const getHokm = ()=>{

  const { cardsData } = storeToRefs(userData())

    const symbols = ref([
        {symbol: 'Hearts', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Naipe_copas.png/640px-Naipe_copas.png'},
        {symbol: 'Spades', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/SuitSpades.svg/1200px-SuitSpades.svg.png'},
        {symbol: 'Clubs', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/640px-SuitClubs.svg.png'},
        {symbol: 'Diamond', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/SuitDiamonds.svg/800px-SuitDiamonds.svg.png'}
      ])
    
      
      const onSymbol = ref(null)
    
      const stillRunning = ref(true)
      function settHokm() {
        var randomTime = Math.floor(Math.random() * 6000)
        stillRunning.value = true;
        let intervalId = null;
        let i = symbols.value.length - 1;
      
        if(stillRunning.value){
        function updateSymbol() {
          onSymbol.value = symbols.value[i];
          i--;
          if (i < 0) {
            i = symbols.value.length - 1;
          }

          setTimeout(() => {
            stillRunning.value = false
            clearInterval(intervalId)
            setHokmOfSymbols()
          }, randomTime)
        }
    
        intervalId = setInterval(updateSymbol, 120);
    }else{
        return;
    }
      }

      const setHokmOfSymbols = ()=>{
        if(onSymbol.value.symbol === 'Hearts'){
          cardsData.value.forEach(obj =>{
            if(obj.symbol === 'hearts'){
              obj.hokm = true
            }
          })
        }else if(onSymbol.value.symbol === 'Spades'){
          cardsData.value.forEach(obj =>{
            if(obj.symbol === 'spades'){
              obj.hokm = true
            }
          })
        }else if(onSymbol.value.symbol === 'Clubs'){
          cardsData.value.forEach(obj =>{
            if(obj.symbol === 'clubs'){
              obj.hokm = true
            }
          })
        }else if(onSymbol.value.symbol === 'Diamond'){
          cardsData.value.forEach(obj =>{
            if(obj.symbol === 'diamonds'){
              obj.hokm = true
            }
          })
        }
      }


      return{
        onSymbol,
        settHokm
      }
}

