var object = {
    'factit': function factorial(n) {
      console.log(n);
      if (n <= 1) {
        return 1;
      }
      console.log(n)
      return n * factorial(n - 1);
    }
  };
  
  object.factit(5)