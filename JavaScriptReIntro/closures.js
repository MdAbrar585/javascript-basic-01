function makeAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  var add5 = makeAdder(10);
  var add20 = makeAdder(30);
  console.log(add5(15)); // ?
  console.log(add20(27)); // ?