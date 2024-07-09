function findSum(){
  let factoriel= findFactoriel(100).toString();
  let arr= factoriel.split("");
  let sum=0;
  let numberArray = []

  for (let i = 0; i < arr.length; i++)
      numberArray.push(parseInt(arr[i]));

  for(let i=0;i<numberArray.length;i++){
      sum+=numberArray[i];
  }
console.log(sum);
}

function findFactoriel(number){
  if (number === 0) {
    return BigInt(1);
  } else {
    let calculate = BigInt(number) * findFactoriel(number - 1);
    return calculate;
  }
}
findSum();