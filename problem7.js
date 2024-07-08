function prime(){
  let primeNumbers=[];
  let numberOfPrimes=0;
  for(let i=2; ;i++){
    if(isPrime(i)){
      numberOfPrimes++;
      primeNumbers.push(i);
    }
    if(numberOfPrimes==10001){
      console.log("10001th prime is:"+primeNumbers[10000]);
      break;
    }
  }
}
function isPrime(num) {
  if(num < 2) 
    return false;
  for(let j = 2; j <= Math.sqrt(num); j++) {
    if(num % j === 0) 
      return false;
  }
  return true;
}
prime();