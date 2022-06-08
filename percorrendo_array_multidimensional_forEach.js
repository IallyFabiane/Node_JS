var arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
  ];
  arr.forEach(function(element) {
    element.forEach(function(element) {
      console.log(element);
    });
  });