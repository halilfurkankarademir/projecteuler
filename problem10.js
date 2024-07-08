function sumOfPrimes(){
let sum=0;
for(let i=2;i<=2000000;i++){
  if(isPrime(i)){
    sum+=i;
  }
}
console.log(sum);
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
sumOfPrimes();