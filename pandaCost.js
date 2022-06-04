
//Problem2 
//singra somucha jilapi total price
function pandaCost(singara,somucha,jilapi){
  if( (typeof singara)==="string" || (typeof somucha)==="string" || (typeof jilapi)==="string"){
      return "string or symble not allow"
  }else if(singara<0 || somucha<0 || jilapi<0){
      return "Negative input not allow"
  }else{

      const totalSingaraprice=singara * 7;
  const totalSomuchaPrice=somucha * 10;
  const totalJilapiPrice=jilapi * 15;
  const totalPrice=totalSingaraprice+totalSomuchaPrice+totalJilapiPrice;
  return totalPrice;
  }
  
}
console.log(pandaCost(1,1,1));


