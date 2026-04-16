const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


test('100Eur es igual a 107USD', () => { 

  let euroToDollar = fromEuroToDollar(100);

  expect(euroToDollar).toBe(107.00);

 });

 test('10 Dollars es igual a 1462.62 yens', () => { 

  let dollarToYen = fromDollarToYen(10);

  expect(dollarToYen).toBe(1462.62);

 });


 test('50 Yens es igual a 0.28 Pounds', () => {

    let yenToDollar = fromYenToPound(50);

    expect(yenToDollar).toBe(0.28);
 })

