let cat = {
  hp: 10,
  name: 'cat'
};

let john = {
  name: 'John'
};

john.__proto__ = cat;
console.log(john);
console.log(john.hp);
