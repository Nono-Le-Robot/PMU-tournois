let solde = 10
solde_value.innerHTML = `Solde : ${solde} USDT`



var rangeValueLeverage = function(){
  let size_calc = (solde * leverage.value) * size.value / 100
  var newValue = leverage.value;
  size_value.innerHTML = newValue;
  leverage_value.innerHTML = `Levier (x${leverage.value})` 
  size_value.innerHTML = `valeur : ${size_calc}`
  console.log(leverage.value);
}
leverage.addEventListener("input", rangeValueLeverage);



var rangeValueSize = function(){
    let size_calc = (solde * leverage.value) * size.value / 100
    var newValue = size.value;
    size_value.innerHTML = newValue;
    solde_value.innerHTML = `Solde : ${solde} USDT`
    size_value.innerHTML = `valeur : ${size_calc}`
    console.log(size.value);  
}
size.addEventListener("input", rangeValueSize);