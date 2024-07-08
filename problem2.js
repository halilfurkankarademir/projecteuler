function calculate(){
  let x=1;
  let y=2;
  let sum=0;
  while(x<4000000){
    if(x%2==0){
      sum+=x;
    }
    let z= x+y;
    x=y;
    y=z;
  }
  console.log(sum);
}
calculate();