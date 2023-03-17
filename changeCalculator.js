https://gist.github.com/Lala0419/ad6a73f39c90e955d88539395cc6d647

const calculateChange = function(total, cash) {
  const denominations = [
    { name: 'twentyDollar', value: 2000 },
    { name: 'tenDollar', value: 1000 },
    { name: 'fiveDollar', value: 500 },
    { name: 'twoDollar', value: 200 },
    { name: 'oneDollar', value: 100 },
    { name: 'quarter', value: 25 },
    { name: 'dime', value: 10 },
    { name: 'nickel', value: 5 },
    { name: 'penny', value: 1 },
  ];

  const change = cash - total;
  const result = {};

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    if (change >= denomination.value) {
      const count = Math.floor(change / denomination.value);
      result[denomination.name] = count;
      change -= count * denomination.value;
    }
  }

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
