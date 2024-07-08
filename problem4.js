function palindromeProduct() {
  let max = 0;
  let firstNumber=0;
  let secondNumber=0;
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      let product = i*j;
      if (isPalindrome(product)&& product>max) {
        firstNumber=i;
        secondNumber=j;
        max = product;
      }
    }
  }
  console.log("Max palindrome number is:" + max + " and 3-digit numbers are:"+firstNumber +"," +secondNumber);
}
function isPalindrome(numberToControl) {
  let str1 = numberToControl.toString();
  let str2 = str1.split("").reverse().join("");
  if (str1 == str2) 
    return 1;
  else 
    return 0;
}
palindromeProduct();
