//problem-1
// Ana to Vori Convert
function anaToVori(ana){
  if (typeof ana === 'string'){
    return 'String or Symbol not allow';
  }
  else if(ana>=0){
    const vori =(ana / 16).toFixed(2);
    const voriNumeric = parseFloat(vori);
    return voriNumeric;
  }else if (ana <= 0){
    return 'Zero or Negative not allow';
  } 
}

console.log(anaToVori(16));
