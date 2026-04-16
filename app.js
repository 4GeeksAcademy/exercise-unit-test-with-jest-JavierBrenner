let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// 1 EUR (Euro) = 1.07 USD (US Dollar)

const fromEuroToDollar = (euro) => {
    // let dollar = euro * oneEuroIs.USD;
    // let dollarRedondeo = dollar.toFixed(3)
    return Number((euro * oneEuroIs.USD).toFixed(2));
    // dollarRedondeo;
    
}

 const fromDollarToYen = (usd) => {

    let euro = usd / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    let yenRedondeo = yen.toFixed(2)
    return Number(yenRedondeo);
 }
 

 const fromYenToPound = (yen) => {
    
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    let poundRedondeo = pound.toFixed(2)
    return Number(poundRedondeo);
 }

 fromEuroToDollar();

 console.log(fromEuroToDollar(100));
 console.log(fromDollarToYen(10));
 console.log(fromYenToPound(50));
 
module.exports = {oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound  }

