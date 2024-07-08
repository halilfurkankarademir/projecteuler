function smallestMultiple(){
  let number=1;
  let isFound=false;
  while(!isFound){
    let result=checkDivisibility(number);
    if(result){
      isFound=true;
    }
    else{
      number++; 
    }
  }
  console.log("Answer is:"+number);
  }
function checkDivisibility(number){
  for(let i=1;i<=20;i++){
    if(number%i!==0)
      return 0;
  }
  return 1;
}
smallestMultiple();