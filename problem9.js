function Pythagorean() {
  let a, b, c;
  isFound = false;
  for (a = 1; a < 1000; a++) {
    for (b = 2; b < 1000; b++) {
      c = 1000 - a - b;
      if (c > b && isPythagorean(a, b, c)) {
        console.log(a * b * c);
        console.log(a);
        console.log(b);
        console.log(c);
        isFound = true;
        break;
      }
    }
    
    }
}

function isPythagorean(a, b, c) {
  if (c * c == a * a + b * b) {
    return true;
  } else return false;
}
Pythagorean();
