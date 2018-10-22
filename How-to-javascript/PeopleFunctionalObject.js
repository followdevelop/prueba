const people = [
    { name: 'jeisson'  , age: 27 , genere: 'M' },
    { name: 'Vale'  , age: 14 , genere: 'F' },
    { name: 'Mile'  , age: 27 , genere: 'F' },
    { name: 'Johan'  , age: 30 , genere: 'M' }
];
people
const AGE_TO_OLD = 18;
const extractAge = person => person.age;
const isOlder = age => age >= AGE_TO_OLD;
const sumAge = (sum, age) => sum + age;
const sumOlderAge = people
.map(extractAge)
.filter(isOlder)
.reduce(sumAge)
sumOlderAge

ages = people.map(extractAge)
ages
olderAges = ages.filter(isOlder);
olderAges
