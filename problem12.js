function triangleNumbers(){
  let i=1;
  while(true){
    let triangle= (i*(i+1)/2);
    let count=0;
    for(let j=1;j<Math.sqrt(triangle);j++){
      if(triangle%j==0){
        count+=2;
      }
    }
    if(count>=501){
      document.write(triangle);
      break;
    }
    i++;
  }
}
triangleNumbers();