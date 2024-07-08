function primeFactor(number){
  if(number%2==0){
    console.log(2);
    number=number/2;
  }
  for(let i=3;i<Math.sqrt(number);i++){
    while(number%i==0){
      console.log(i);
      number=number/i;
    }
  }
  if(number>2){
    console.log(number+" ");
  }
}
let n=600851475143;
primeFactor(n);