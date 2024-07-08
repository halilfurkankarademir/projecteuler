function sumSquare(){
  let sumOfSqr=0;
  let sum=0;
  for(let i=1;i<=100;i++){
    let sqr= i*i;
    sumOfSqr+=sqr;
    sum+=i;
  }
  let sqrOfSum=sum*sum;
  let diff=sqrOfSum-sumOfSqr;
  console.log("Sum of squares:"+sumOfSqr);
  console.log("Square of sums:"+sqrOfSum);
  console.log("Difference:"+diff);
}
sumSquare();