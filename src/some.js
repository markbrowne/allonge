var sourceData = [
  { value: 422 },
  { value: 594 },
  { value: 151 },
  { value: 938 },
  { value: 821 },
  { value: 884 },
  { value: 806 },
  { value: 300 },
  { value: 862 },
  { value: 703 },
  { value: 899 },
  { value: 539 }
];
var targetData = [
  { value: 423 },
  { value: 594 },
  { value: 151 },
  { value: 938 },
  { value: 821 },
  { value: 884 },
  { value: 806 },
  { value: 300 },
  { value: 862 },
  { value: 703 },
  { value: 899 },
  { value: 539 }
];

var fdiff = sourceData.filter(
  target => !targetData.some(source => source.value === target.value)
);

var every = targetData.every(item => item.value >= 700);
});

console.log(fdiff);

console.log(every);
