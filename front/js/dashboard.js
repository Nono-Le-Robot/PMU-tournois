let solde = 10
let BTCPrice = 22000;
solde_value.innerHTML = `Solde : ${solde} USDT`
var rangeValueLeverage = function(){
  let size_calc = (solde * leverage.value) * size.value / 100
  let liquidation_price_calc = BTCPrice-(leverage.value/100*BTCPrice/100)
  console.log(liquidation_price_calc); 
  let newValue = leverage.value;
  size_value.innerHTML = newValue;
  leverage_value.innerHTML = `Levier (x${leverage.value})` 
  size_value.innerHTML = `valeur : ${size_calc}`
  liquidation_price_value.innerHTML = `Liquidation :`

}
var rangeValueSize = function(){
    let size_calc = (solde * leverage.value) * size.value / 100
    var newValue = size.value;
    let liquidation_price_calc = BTCPrice - (BTCPrice*leverage.value/size.value)
    size_value.innerHTML = newValue;
    solde_value.innerHTML = `Solde : ${solde} USDT`
    size_value.innerHTML = `valeur : ${size_calc}`
    liquidation_price_value.innerHTML = `Liquidation :`
}
leverage.addEventListener("input", rangeValueLeverage);
size.addEventListener("input", rangeValueSize);
